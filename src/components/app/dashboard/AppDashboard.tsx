import { FC } from "react";
import { AppDashboardRevenue } from "./AppDashboardRevenue";
import { AppDashboardChart } from "./AppDashboardChart";
import { AppDashboardActivity } from "./AppDashboardActivity";
import { Button, Card, Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui";
import { AppDashboardGrowth } from "./AppDashboardGrowth";
import { AppInvestLUSDCBalance } from "../invest/AppInvestLUSDCBalance";

export const AppDashboard: FC = () => {
  console.log("RENDERED");

  return (
    <>
      <div className="lg:w-[900px] w-full flex flex-col gap-10 justify-center items-center mb-10">
        <Card
          circleIntensity={0.07}
          defaultGradient={true}
          className="w-full flex justify-between "
        >
          <AppDashboardChart className="h-[680px] w-full" />
          <div className="p-10 flex-col justify-between gap-10 h-full self-stretch flex-grow -mt-1">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-2 items-end">
                <h3 className="font-bold text-lg text-fg/50 whitespace-nowrap">Total growth</h3>
                <AppDashboardGrowth className="text-[1.92rem] text-fg font-heading font-bold" />
              </div>
              <div className="flex flex-col gap-2 items-end">
                <h3 className="font-bold text-lg text-fg/50 whitespace-nowrap">Total revenues</h3>
                <AppDashboardRevenue className="text-[1.92rem] text-fg font-heading font-bold" />
              </div>
              <Tooltip>
                <TooltipTrigger>
                  <div className="flex flex-col gap-2 items-end opacity-60 cursor-not-allowed grayscale ">
                    <h3 className="font-bold text-lg text-fg/50 whitespace-nowrap">LDY balance</h3>
                    <div className="flex gap-5 items-center">
                      <Button size="tiny" className="-mt-1 pointer-events-none">
                        Stake
                      </Button>
                      <span className="text-[1.92rem] text-fg font-heading font-bold -none inline-flex item-center align-bottom">
                        0
                      </span>
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="font-semibold">Available after TGE</TooltipContent>
              </Tooltip>
              <div className="flex flex-col gap-2 items-end">
                <h3 className="font-bold text-lg text-fg/50 whitespace-nowrap">LUSDC balance</h3>
                <AppInvestLUSDCBalance />
              </div>
            </div>
          </div>
        </Card>
        <Card circleIntensity={0.07} defaultGradient={true} className="w-full flex flex-col gap-8">
          <h2 className="font-heading text-center text-2xl font-bold pt-8">Activity</h2>
          <AppDashboardActivity className="w-full" />
        </Card>
      </div>
    </>
  );
};
