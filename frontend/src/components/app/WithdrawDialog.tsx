"use client";
import { ChangeEvent, FC, useEffect, useRef, useState, useMemo } from "react";
import {
  Amount,
  AmountInput,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Spinner,
} from "@/components/ui";
import {
  useReadLTokenBalanceOf,
  useReadLTokenDecimals,
  useReadLTokenWithdrawalFeeInEth,
  useSimulateLTokenInstantWithdrawal,
  useSimulateLTokenRequestWithdrawal,
} from "@/generated";
import { formatUnits, parseEther, parseUnits, zeroAddress } from "viem";
import { useContractAddress } from "@/hooks/useContractAddress";
import { TxButton } from "../ui/TxButton";
import { 
  UseSimulateContractReturnType, 
  useAccount, 
  useBlockNumber
} from "wagmi";
import { useQueryClient } from "@tanstack/react-query";
import useRestricted from "@/hooks/useRestricted";

interface Props extends React.ComponentPropsWithoutRef<typeof Dialog> {
  underlyingSymbol: string;
  onOpenChange?: React.ComponentPropsWithoutRef<typeof Dialog>["onOpenChange"];
}

type SafePreparation = UseSimulateContractReturnType & {
  __brand: 'safe_preparation'
};

function castPreparation(prep: any): SafePreparation {
  return {
    ...prep,
    __brand: 'safe_preparation'
  } as SafePreparation;
}

export const WithdrawDialog: FC<Props> = ({ children, underlyingSymbol, onOpenChange }) => {
  const { address, isConnected } = useAccount();
  const lTokenAddress = useContractAddress(`L${underlyingSymbol}`);
  const { data: decimals } = useReadLTokenDecimals({ address: lTokenAddress! });
  const { data: balance, queryKey } = useReadLTokenBalanceOf({
    address: lTokenAddress!,
    args: [address || zeroAddress],
  });
  const { data: withdrawalFeeInEth, queryKey: queryForWithdrawalFeeInEth } =
    useReadLTokenWithdrawalFeeInEth({
      address: lTokenAddress!,
      args: [],
    });
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const inputEl = useRef<HTMLInputElement>(null);
  const [withdrawnAmount, setWithdrawnAmount] = useState(0n);
  
  // Instant withdrawal simulation
  const instantWithdrawalResult = useSimulateLTokenInstantWithdrawal({
    address: lTokenAddress!,
    args: [withdrawnAmount],
    query: {
      enabled: Boolean(isConnected && lTokenAddress && withdrawnAmount > 0n)
    }
  });
  const instantWithdrawalPreparation = castPreparation(instantWithdrawalResult);

  // Request withdrawal simulation
  const requestWithdrawalResult = useSimulateLTokenRequestWithdrawal({
    address: lTokenAddress!,
    args: [withdrawnAmount],
    value: BigInt(withdrawalFeeInEth || 0),
    query: {
      enabled: Boolean(
        isConnected && 
        lTokenAddress && 
        withdrawnAmount > 0n && 
        withdrawalFeeInEth !== undefined
      )
    }
  });
  const requestWithdrawalPreparation = castPreparation(requestWithdrawalResult);

  // Memoize queryKeys array
  const queryKeys = useMemo(() => 
    [queryKey, queryForWithdrawalFeeInEth].filter(Boolean),
    [queryKey, queryForWithdrawalFeeInEth]
  );

  const { data: blockNumber } = useBlockNumber({ watch: true });
  const queryClient = useQueryClient();

  // Refresh data every 5 blocks
  useEffect(() => {
    if (blockNumber && blockNumber % 5n === 0n && queryClient) {
      queryKeys.forEach(k => {
        if (k) queryClient.invalidateQueries({ queryKey: k });
      });
    }
  }, [blockNumber, queryClient, queryKeys]);

  // Fetch restriction status
  const { isRestricted, isLoading: isRestrictionLoading } = useRestricted();

  if (!lTokenAddress) return null;

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value || "0";
    try {
      const amount = parseUnits(value, decimals!);
      setWithdrawnAmount(amount);
      if (hasUserInteracted === true && value === "") {
        setHasUserInteracted(false);
      } else if (!hasUserInteracted && amount > 0n) {
        setHasUserInteracted(true);
      }
    } catch (err) {
      console.error("Error parsing amount:", err);
    }
  };

  return (
    <Dialog onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        onOpenAutoFocus={(e) => {
          e.preventDefault();
          inputEl.current?.focus();
        }}
      >
        {(() => {
          if (isRestrictionLoading)
            return (
              <div className="py-8 px-16 text-2xl">
                <Spinner />
              </div>
            );
          else if (isRestricted) {
            return (
              <div className="flex flex-col gap-5 text-lg justify-center items-center">
                <span className="text-[5rem] leading-[5rem]">🤷</span>
                <span className="text-center font-semibold">
                  Oops, you&apos;re not authorized to access this feature
                </span>
                <span className="text-base">
                  This may be due to your location or on-chain activity. <br />
                  If you think this is an error, please contact our support team at{" "}
                  <a href="mailto:contact@ledgity.com" className="text-primary underline">
                    contact@ledgity.com
                  </a>
                </span>
              </div>
            );
          } else
            return (
              <>
                <DialogHeader>
                  <DialogTitle>Withdraw {underlyingSymbol}</DialogTitle>
                  <DialogDescription>
                    <div>
                      <span className="mb-1 inline-block text-xl font-semibold text-primary">
                        You will receive {underlyingSymbol} in a 1:1 ratio.
                      </span>
                      <br />
                      Note that you won&apos;t receive yield anymore.
                    </div>
                    {instantWithdrawalPreparation.isError && (
                      <div className="flex items-stretch justify-stretch gap-2 rounded-2xl bg-fg/[7%] p-4 text-fg/80">
                        <div className="flex items-center justify-center border-r border-r-fg/20 pr-4">
                          <i className="ri-information-line text-2xl" />
                        </div>
                        <div className="pl-4 text-left">
                          Your request will be <span className="font-semibold">queued</span> and
                          auto-processed in <span className="font-semibold">1-2 working days</span>.
                        </div>
                      </div>
                    )}
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <div className="mt-6 flex flex-nowrap items-end justify-center gap-4 mb-3 mr-3 ml-3">
                    <AmountInput
                      ref={inputEl}
                      maxValue={balance}
                      decimals={decimals}
                      symbol={`L${underlyingSymbol}`}
                      onChange={handleAmountChange}
                    />
                    {(!instantWithdrawalPreparation.isError && (
                      <TxButton
                        size="medium"
                        preparation={instantWithdrawalPreparation}
                        className="relative -top-[1.5px]"
                        disabled={withdrawnAmount === 0n}
                        hasUserInteracted={hasUserInteracted}
                        transactionSummary={
                          <span>
                            Withdraw{" "}
                            <Amount
                              value={withdrawnAmount}
                              decimals={decimals}
                              suffix={"L" + underlyingSymbol}
                              displaySymbol={true}
                              className="whitespace-nowrap text-indigo-300 underline decoration-indigo-300 decoration-2 underline-offset-4"
                            />{" "}
                            against{" "}
                            <Amount
                              value={withdrawnAmount}
                              decimals={decimals}
                              suffix={underlyingSymbol}
                              displaySymbol={true}
                              className="whitespace-nowrap text-indigo-300 underline decoration-indigo-300 decoration-2 underline-offset-4"
                            />{" "}
                          </span>
                        }
                      >
                        Withdraw
                      </TxButton>
                    )) || (
                      <TxButton
                        size="medium"
                        preparation={requestWithdrawalPreparation}
                        className="relative -top-[1.5px]"
                        disabled={withdrawnAmount === 0n}
                        hasUserInteracted={hasUserInteracted}
                        transactionSummary={
                          <span>
                            Request withdrawal of{" "}
                            <Amount
                              value={withdrawnAmount}
                              decimals={decimals}
                              suffix={"L" + underlyingSymbol}
                              displaySymbol={true}
                              className="whitespace-nowrap text-indigo-300 underline decoration-indigo-300 decoration-2 underline-offset-4"
                            />{" "}
                            against{" "}
                            <Amount
                              value={withdrawnAmount}
                              decimals={decimals}
                              suffix={underlyingSymbol}
                              displaySymbol={true}
                              className="whitespace-nowrap text-indigo-300 underline decoration-indigo-300 decoration-2 underline-offset-4"
                            />{" "}
                          </span>
                        }
                      >
                        Request
                      </TxButton>
                    )}
                  </div>
                </DialogFooter>
              </>
            );
        })()}
      </DialogContent>
    </Dialog>
  );
};