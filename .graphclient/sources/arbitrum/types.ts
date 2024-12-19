// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace ArbitrumTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
  Int8: any;
  Timestamp: any;
};

export type APRChange = {
  id: Scalars['ID'];
  ltoken: LToken;
  timestamp: Scalars['BigInt'];
  apr: Scalars['BigDecimal'];
};

export type APRChange_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  ltoken?: InputMaybe<Scalars['String']>;
  ltoken_not?: InputMaybe<Scalars['String']>;
  ltoken_gt?: InputMaybe<Scalars['String']>;
  ltoken_lt?: InputMaybe<Scalars['String']>;
  ltoken_gte?: InputMaybe<Scalars['String']>;
  ltoken_lte?: InputMaybe<Scalars['String']>;
  ltoken_in?: InputMaybe<Array<Scalars['String']>>;
  ltoken_not_in?: InputMaybe<Array<Scalars['String']>>;
  ltoken_contains?: InputMaybe<Scalars['String']>;
  ltoken_contains_nocase?: InputMaybe<Scalars['String']>;
  ltoken_not_contains?: InputMaybe<Scalars['String']>;
  ltoken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  ltoken_starts_with?: InputMaybe<Scalars['String']>;
  ltoken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ltoken_not_starts_with?: InputMaybe<Scalars['String']>;
  ltoken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ltoken_ends_with?: InputMaybe<Scalars['String']>;
  ltoken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ltoken_not_ends_with?: InputMaybe<Scalars['String']>;
  ltoken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ltoken_?: InputMaybe<LToken_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  apr?: InputMaybe<Scalars['BigDecimal']>;
  apr_not?: InputMaybe<Scalars['BigDecimal']>;
  apr_gt?: InputMaybe<Scalars['BigDecimal']>;
  apr_lt?: InputMaybe<Scalars['BigDecimal']>;
  apr_gte?: InputMaybe<Scalars['BigDecimal']>;
  apr_lte?: InputMaybe<Scalars['BigDecimal']>;
  apr_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  apr_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<APRChange_filter>>>;
  or?: InputMaybe<Array<InputMaybe<APRChange_filter>>>;
};

export type APRChange_orderBy =
  | 'id'
  | 'ltoken'
  | 'ltoken__id'
  | 'ltoken__symbol'
  | 'ltoken__decimals'
  | 'ltoken__totalMintedRewards'
  | 'timestamp'
  | 'apr';

export type Activity = {
  id: Scalars['ID'];
  requestId: Scalars['BigInt'];
  ltoken: LToken;
  timestamp: Scalars['BigInt'];
  account: Scalars['Bytes'];
  action: ActivityAction;
  amount: Scalars['BigDecimal'];
  amountAfterFees: Scalars['BigDecimal'];
  status: ActivityStatus;
};

export type ActivityAction =
  | 'Deposit'
  | 'Withdraw';

export type ActivityStatus =
  | 'Queued'
  | 'Cancelled'
  | 'Success'
  | 'Fulfilled';

export type Activity_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  requestId?: InputMaybe<Scalars['BigInt']>;
  requestId_not?: InputMaybe<Scalars['BigInt']>;
  requestId_gt?: InputMaybe<Scalars['BigInt']>;
  requestId_lt?: InputMaybe<Scalars['BigInt']>;
  requestId_gte?: InputMaybe<Scalars['BigInt']>;
  requestId_lte?: InputMaybe<Scalars['BigInt']>;
  requestId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  requestId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  ltoken?: InputMaybe<Scalars['String']>;
  ltoken_not?: InputMaybe<Scalars['String']>;
  ltoken_gt?: InputMaybe<Scalars['String']>;
  ltoken_lt?: InputMaybe<Scalars['String']>;
  ltoken_gte?: InputMaybe<Scalars['String']>;
  ltoken_lte?: InputMaybe<Scalars['String']>;
  ltoken_in?: InputMaybe<Array<Scalars['String']>>;
  ltoken_not_in?: InputMaybe<Array<Scalars['String']>>;
  ltoken_contains?: InputMaybe<Scalars['String']>;
  ltoken_contains_nocase?: InputMaybe<Scalars['String']>;
  ltoken_not_contains?: InputMaybe<Scalars['String']>;
  ltoken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  ltoken_starts_with?: InputMaybe<Scalars['String']>;
  ltoken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ltoken_not_starts_with?: InputMaybe<Scalars['String']>;
  ltoken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ltoken_ends_with?: InputMaybe<Scalars['String']>;
  ltoken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ltoken_not_ends_with?: InputMaybe<Scalars['String']>;
  ltoken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ltoken_?: InputMaybe<LToken_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  account?: InputMaybe<Scalars['Bytes']>;
  account_not?: InputMaybe<Scalars['Bytes']>;
  account_gt?: InputMaybe<Scalars['Bytes']>;
  account_lt?: InputMaybe<Scalars['Bytes']>;
  account_gte?: InputMaybe<Scalars['Bytes']>;
  account_lte?: InputMaybe<Scalars['Bytes']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']>>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  account_contains?: InputMaybe<Scalars['Bytes']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']>;
  action?: InputMaybe<ActivityAction>;
  action_not?: InputMaybe<ActivityAction>;
  action_in?: InputMaybe<Array<ActivityAction>>;
  action_not_in?: InputMaybe<Array<ActivityAction>>;
  amount?: InputMaybe<Scalars['BigDecimal']>;
  amount_not?: InputMaybe<Scalars['BigDecimal']>;
  amount_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amountAfterFees?: InputMaybe<Scalars['BigDecimal']>;
  amountAfterFees_not?: InputMaybe<Scalars['BigDecimal']>;
  amountAfterFees_gt?: InputMaybe<Scalars['BigDecimal']>;
  amountAfterFees_lt?: InputMaybe<Scalars['BigDecimal']>;
  amountAfterFees_gte?: InputMaybe<Scalars['BigDecimal']>;
  amountAfterFees_lte?: InputMaybe<Scalars['BigDecimal']>;
  amountAfterFees_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amountAfterFees_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  status?: InputMaybe<ActivityStatus>;
  status_not?: InputMaybe<ActivityStatus>;
  status_in?: InputMaybe<Array<ActivityStatus>>;
  status_not_in?: InputMaybe<Array<ActivityStatus>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Activity_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Activity_filter>>>;
};

export type Activity_orderBy =
  | 'id'
  | 'requestId'
  | 'ltoken'
  | 'ltoken__id'
  | 'ltoken__symbol'
  | 'ltoken__decimals'
  | 'ltoken__totalMintedRewards'
  | 'timestamp'
  | 'account'
  | 'action'
  | 'amount'
  | 'amountAfterFees'
  | 'status';

export type AffiliateActivity = {
  id: Scalars['Bytes'];
  affiliateCode: Scalars['String'];
  ltoken: LToken;
  action: ActivityAction;
  account: Scalars['Bytes'];
  amount: Scalars['BigInt'];
  amountAfterFees: Scalars['BigInt'];
  txHash: Scalars['Bytes'];
  logIndex: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
};

export type AffiliateActivity_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  affiliateCode?: InputMaybe<Scalars['String']>;
  affiliateCode_not?: InputMaybe<Scalars['String']>;
  affiliateCode_gt?: InputMaybe<Scalars['String']>;
  affiliateCode_lt?: InputMaybe<Scalars['String']>;
  affiliateCode_gte?: InputMaybe<Scalars['String']>;
  affiliateCode_lte?: InputMaybe<Scalars['String']>;
  affiliateCode_in?: InputMaybe<Array<Scalars['String']>>;
  affiliateCode_not_in?: InputMaybe<Array<Scalars['String']>>;
  affiliateCode_contains?: InputMaybe<Scalars['String']>;
  affiliateCode_contains_nocase?: InputMaybe<Scalars['String']>;
  affiliateCode_not_contains?: InputMaybe<Scalars['String']>;
  affiliateCode_not_contains_nocase?: InputMaybe<Scalars['String']>;
  affiliateCode_starts_with?: InputMaybe<Scalars['String']>;
  affiliateCode_starts_with_nocase?: InputMaybe<Scalars['String']>;
  affiliateCode_not_starts_with?: InputMaybe<Scalars['String']>;
  affiliateCode_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  affiliateCode_ends_with?: InputMaybe<Scalars['String']>;
  affiliateCode_ends_with_nocase?: InputMaybe<Scalars['String']>;
  affiliateCode_not_ends_with?: InputMaybe<Scalars['String']>;
  affiliateCode_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ltoken?: InputMaybe<Scalars['String']>;
  ltoken_not?: InputMaybe<Scalars['String']>;
  ltoken_gt?: InputMaybe<Scalars['String']>;
  ltoken_lt?: InputMaybe<Scalars['String']>;
  ltoken_gte?: InputMaybe<Scalars['String']>;
  ltoken_lte?: InputMaybe<Scalars['String']>;
  ltoken_in?: InputMaybe<Array<Scalars['String']>>;
  ltoken_not_in?: InputMaybe<Array<Scalars['String']>>;
  ltoken_contains?: InputMaybe<Scalars['String']>;
  ltoken_contains_nocase?: InputMaybe<Scalars['String']>;
  ltoken_not_contains?: InputMaybe<Scalars['String']>;
  ltoken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  ltoken_starts_with?: InputMaybe<Scalars['String']>;
  ltoken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ltoken_not_starts_with?: InputMaybe<Scalars['String']>;
  ltoken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ltoken_ends_with?: InputMaybe<Scalars['String']>;
  ltoken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ltoken_not_ends_with?: InputMaybe<Scalars['String']>;
  ltoken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ltoken_?: InputMaybe<LToken_filter>;
  action?: InputMaybe<ActivityAction>;
  action_not?: InputMaybe<ActivityAction>;
  action_in?: InputMaybe<Array<ActivityAction>>;
  action_not_in?: InputMaybe<Array<ActivityAction>>;
  account?: InputMaybe<Scalars['Bytes']>;
  account_not?: InputMaybe<Scalars['Bytes']>;
  account_gt?: InputMaybe<Scalars['Bytes']>;
  account_lt?: InputMaybe<Scalars['Bytes']>;
  account_gte?: InputMaybe<Scalars['Bytes']>;
  account_lte?: InputMaybe<Scalars['Bytes']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']>>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  account_contains?: InputMaybe<Scalars['Bytes']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountAfterFees?: InputMaybe<Scalars['BigInt']>;
  amountAfterFees_not?: InputMaybe<Scalars['BigInt']>;
  amountAfterFees_gt?: InputMaybe<Scalars['BigInt']>;
  amountAfterFees_lt?: InputMaybe<Scalars['BigInt']>;
  amountAfterFees_gte?: InputMaybe<Scalars['BigInt']>;
  amountAfterFees_lte?: InputMaybe<Scalars['BigInt']>;
  amountAfterFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountAfterFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_gt?: InputMaybe<Scalars['Bytes']>;
  txHash_lt?: InputMaybe<Scalars['Bytes']>;
  txHash_gte?: InputMaybe<Scalars['Bytes']>;
  txHash_lte?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AffiliateActivity_filter>>>;
  or?: InputMaybe<Array<InputMaybe<AffiliateActivity_filter>>>;
};

export type AffiliateActivity_orderBy =
  | 'id'
  | 'affiliateCode'
  | 'ltoken'
  | 'ltoken__id'
  | 'ltoken__symbol'
  | 'ltoken__decimals'
  | 'ltoken__totalMintedRewards'
  | 'action'
  | 'account'
  | 'amount'
  | 'amountAfterFees'
  | 'txHash'
  | 'logIndex'
  | 'timestamp';

export type AffiliateUser = {
  id: Scalars['ID'];
  walletAddress: Scalars['Bytes'];
  affiliateCode: Scalars['String'];
};

export type AffiliateUser_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  walletAddress?: InputMaybe<Scalars['Bytes']>;
  walletAddress_not?: InputMaybe<Scalars['Bytes']>;
  walletAddress_gt?: InputMaybe<Scalars['Bytes']>;
  walletAddress_lt?: InputMaybe<Scalars['Bytes']>;
  walletAddress_gte?: InputMaybe<Scalars['Bytes']>;
  walletAddress_lte?: InputMaybe<Scalars['Bytes']>;
  walletAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  walletAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  walletAddress_contains?: InputMaybe<Scalars['Bytes']>;
  walletAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  affiliateCode?: InputMaybe<Scalars['String']>;
  affiliateCode_not?: InputMaybe<Scalars['String']>;
  affiliateCode_gt?: InputMaybe<Scalars['String']>;
  affiliateCode_lt?: InputMaybe<Scalars['String']>;
  affiliateCode_gte?: InputMaybe<Scalars['String']>;
  affiliateCode_lte?: InputMaybe<Scalars['String']>;
  affiliateCode_in?: InputMaybe<Array<Scalars['String']>>;
  affiliateCode_not_in?: InputMaybe<Array<Scalars['String']>>;
  affiliateCode_contains?: InputMaybe<Scalars['String']>;
  affiliateCode_contains_nocase?: InputMaybe<Scalars['String']>;
  affiliateCode_not_contains?: InputMaybe<Scalars['String']>;
  affiliateCode_not_contains_nocase?: InputMaybe<Scalars['String']>;
  affiliateCode_starts_with?: InputMaybe<Scalars['String']>;
  affiliateCode_starts_with_nocase?: InputMaybe<Scalars['String']>;
  affiliateCode_not_starts_with?: InputMaybe<Scalars['String']>;
  affiliateCode_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  affiliateCode_ends_with?: InputMaybe<Scalars['String']>;
  affiliateCode_ends_with_nocase?: InputMaybe<Scalars['String']>;
  affiliateCode_not_ends_with?: InputMaybe<Scalars['String']>;
  affiliateCode_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AffiliateUser_filter>>>;
  or?: InputMaybe<Array<InputMaybe<AffiliateUser_filter>>>;
};

export type AffiliateUser_orderBy =
  | 'id'
  | 'walletAddress'
  | 'affiliateCode';

export type Aggregation_interval =
  | 'hour'
  | 'day';

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type LToken = {
  id: Scalars['ID'];
  symbol: Scalars['String'];
  decimals: Scalars['Int'];
  totalMintedRewards: Scalars['BigDecimal'];
  tvlUpdates?: Maybe<Array<TVLChange>>;
  aprUpdates?: Maybe<Array<APRChange>>;
  activities?: Maybe<Array<Activity>>;
  rewardsMints?: Maybe<Array<RewardsMint>>;
};


export type LTokentvlUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TVLChange_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TVLChange_filter>;
};


export type LTokenaprUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<APRChange_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<APRChange_filter>;
};


export type LTokenactivitiesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Activity_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Activity_filter>;
};


export type LTokenrewardsMintsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RewardsMint_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RewardsMint_filter>;
};

export type LToken_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  symbol?: InputMaybe<Scalars['String']>;
  symbol_not?: InputMaybe<Scalars['String']>;
  symbol_gt?: InputMaybe<Scalars['String']>;
  symbol_lt?: InputMaybe<Scalars['String']>;
  symbol_gte?: InputMaybe<Scalars['String']>;
  symbol_lte?: InputMaybe<Scalars['String']>;
  symbol_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_contains?: InputMaybe<Scalars['String']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_contains?: InputMaybe<Scalars['String']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_starts_with?: InputMaybe<Scalars['String']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_ends_with?: InputMaybe<Scalars['String']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  decimals?: InputMaybe<Scalars['Int']>;
  decimals_not?: InputMaybe<Scalars['Int']>;
  decimals_gt?: InputMaybe<Scalars['Int']>;
  decimals_lt?: InputMaybe<Scalars['Int']>;
  decimals_gte?: InputMaybe<Scalars['Int']>;
  decimals_lte?: InputMaybe<Scalars['Int']>;
  decimals_in?: InputMaybe<Array<Scalars['Int']>>;
  decimals_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalMintedRewards?: InputMaybe<Scalars['BigDecimal']>;
  totalMintedRewards_not?: InputMaybe<Scalars['BigDecimal']>;
  totalMintedRewards_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalMintedRewards_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalMintedRewards_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalMintedRewards_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalMintedRewards_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalMintedRewards_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tvlUpdates_?: InputMaybe<TVLChange_filter>;
  aprUpdates_?: InputMaybe<APRChange_filter>;
  activities_?: InputMaybe<Activity_filter>;
  rewardsMints_?: InputMaybe<RewardsMint_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LToken_filter>>>;
  or?: InputMaybe<Array<InputMaybe<LToken_filter>>>;
};

export type LToken_orderBy =
  | 'id'
  | 'symbol'
  | 'decimals'
  | 'totalMintedRewards'
  | 'tvlUpdates'
  | 'aprUpdates'
  | 'activities'
  | 'rewardsMints';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type PreMiningLock = {
  id: Scalars['ID'];
  amount: Scalars['BigDecimal'];
  duration: Scalars['Int'];
};

export type PreMiningLock_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  amount?: InputMaybe<Scalars['BigDecimal']>;
  amount_not?: InputMaybe<Scalars['BigDecimal']>;
  amount_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  duration?: InputMaybe<Scalars['Int']>;
  duration_not?: InputMaybe<Scalars['Int']>;
  duration_gt?: InputMaybe<Scalars['Int']>;
  duration_lt?: InputMaybe<Scalars['Int']>;
  duration_gte?: InputMaybe<Scalars['Int']>;
  duration_lte?: InputMaybe<Scalars['Int']>;
  duration_in?: InputMaybe<Array<Scalars['Int']>>;
  duration_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PreMiningLock_filter>>>;
  or?: InputMaybe<Array<InputMaybe<PreMiningLock_filter>>>;
};

export type PreMiningLock_orderBy =
  | 'id'
  | 'amount'
  | 'duration';

export type Query = {
  c42161_ltoken?: Maybe<LToken>;
  c42161_ltokens: Array<LToken>;
  c42161_tvlchange?: Maybe<TVLChange>;
  c42161_tvlchanges: Array<TVLChange>;
  c42161_aprchange?: Maybe<APRChange>;
  c42161_aprchanges: Array<APRChange>;
  c42161_activity?: Maybe<Activity>;
  c42161_activities: Array<Activity>;
  c42161_rewardsMint?: Maybe<RewardsMint>;
  c42161_rewardsMints: Array<RewardsMint>;
  c42161_preMiningLock?: Maybe<PreMiningLock>;
  c42161_preMiningLocks: Array<PreMiningLock>;
  c42161_stakingUser?: Maybe<StakingUser>;
  c42161_stakingUsers: Array<StakingUser>;
  c42161_stakingAPRInfo?: Maybe<StakingAPRInfo>;
  c42161_stakingAPRInfos: Array<StakingAPRInfo>;
  c42161_affiliateUser?: Maybe<AffiliateUser>;
  c42161_affiliateUsers: Array<AffiliateUser>;
  c42161_affiliateActivity?: Maybe<AffiliateActivity>;
  c42161_affiliateActivities: Array<AffiliateActivity>;
  /** Access to subgraph metadata */
  c42161__meta?: Maybe<_Meta_>;
};


export type Queryc42161_ltokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryc42161_ltokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryc42161_tvlchangeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryc42161_tvlchangesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TVLChange_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TVLChange_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryc42161_aprchangeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryc42161_aprchangesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<APRChange_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<APRChange_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryc42161_activityArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryc42161_activitiesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Activity_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Activity_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryc42161_rewardsMintArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryc42161_rewardsMintsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RewardsMint_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RewardsMint_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryc42161_preMiningLockArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryc42161_preMiningLocksArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PreMiningLock_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PreMiningLock_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryc42161_stakingUserArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryc42161_stakingUsersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StakingUser_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StakingUser_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryc42161_stakingAPRInfoArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryc42161_stakingAPRInfosArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StakingAPRInfo_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StakingAPRInfo_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryc42161_affiliateUserArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryc42161_affiliateUsersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AffiliateUser_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AffiliateUser_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryc42161_affiliateActivityArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryc42161_affiliateActivitiesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AffiliateActivity_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AffiliateActivity_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryc42161__metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type RewardsMint = {
  id: Scalars['ID'];
  ltoken: LToken;
  timestamp: Scalars['BigInt'];
  account: Scalars['Bytes'];
  balanceBefore: Scalars['BigDecimal'];
  revenue: Scalars['BigDecimal'];
  growth: Scalars['BigDecimal'];
};

export type RewardsMint_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  ltoken?: InputMaybe<Scalars['String']>;
  ltoken_not?: InputMaybe<Scalars['String']>;
  ltoken_gt?: InputMaybe<Scalars['String']>;
  ltoken_lt?: InputMaybe<Scalars['String']>;
  ltoken_gte?: InputMaybe<Scalars['String']>;
  ltoken_lte?: InputMaybe<Scalars['String']>;
  ltoken_in?: InputMaybe<Array<Scalars['String']>>;
  ltoken_not_in?: InputMaybe<Array<Scalars['String']>>;
  ltoken_contains?: InputMaybe<Scalars['String']>;
  ltoken_contains_nocase?: InputMaybe<Scalars['String']>;
  ltoken_not_contains?: InputMaybe<Scalars['String']>;
  ltoken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  ltoken_starts_with?: InputMaybe<Scalars['String']>;
  ltoken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ltoken_not_starts_with?: InputMaybe<Scalars['String']>;
  ltoken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ltoken_ends_with?: InputMaybe<Scalars['String']>;
  ltoken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ltoken_not_ends_with?: InputMaybe<Scalars['String']>;
  ltoken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ltoken_?: InputMaybe<LToken_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  account?: InputMaybe<Scalars['Bytes']>;
  account_not?: InputMaybe<Scalars['Bytes']>;
  account_gt?: InputMaybe<Scalars['Bytes']>;
  account_lt?: InputMaybe<Scalars['Bytes']>;
  account_gte?: InputMaybe<Scalars['Bytes']>;
  account_lte?: InputMaybe<Scalars['Bytes']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']>>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  account_contains?: InputMaybe<Scalars['Bytes']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']>;
  balanceBefore?: InputMaybe<Scalars['BigDecimal']>;
  balanceBefore_not?: InputMaybe<Scalars['BigDecimal']>;
  balanceBefore_gt?: InputMaybe<Scalars['BigDecimal']>;
  balanceBefore_lt?: InputMaybe<Scalars['BigDecimal']>;
  balanceBefore_gte?: InputMaybe<Scalars['BigDecimal']>;
  balanceBefore_lte?: InputMaybe<Scalars['BigDecimal']>;
  balanceBefore_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  balanceBefore_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  revenue?: InputMaybe<Scalars['BigDecimal']>;
  revenue_not?: InputMaybe<Scalars['BigDecimal']>;
  revenue_gt?: InputMaybe<Scalars['BigDecimal']>;
  revenue_lt?: InputMaybe<Scalars['BigDecimal']>;
  revenue_gte?: InputMaybe<Scalars['BigDecimal']>;
  revenue_lte?: InputMaybe<Scalars['BigDecimal']>;
  revenue_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  revenue_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  growth?: InputMaybe<Scalars['BigDecimal']>;
  growth_not?: InputMaybe<Scalars['BigDecimal']>;
  growth_gt?: InputMaybe<Scalars['BigDecimal']>;
  growth_lt?: InputMaybe<Scalars['BigDecimal']>;
  growth_gte?: InputMaybe<Scalars['BigDecimal']>;
  growth_lte?: InputMaybe<Scalars['BigDecimal']>;
  growth_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  growth_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RewardsMint_filter>>>;
  or?: InputMaybe<Array<InputMaybe<RewardsMint_filter>>>;
};

export type RewardsMint_orderBy =
  | 'id'
  | 'ltoken'
  | 'ltoken__id'
  | 'ltoken__symbol'
  | 'ltoken__decimals'
  | 'ltoken__totalMintedRewards'
  | 'timestamp'
  | 'account'
  | 'balanceBefore'
  | 'revenue'
  | 'growth';

export type StakingAPRInfo = {
  id: Scalars['ID'];
  rewardPerSec: Scalars['BigInt'];
  totalStaked: Scalars['BigInt'];
  interestRate: Scalars['BigDecimal'];
};

export type StakingAPRInfo_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  rewardPerSec?: InputMaybe<Scalars['BigInt']>;
  rewardPerSec_not?: InputMaybe<Scalars['BigInt']>;
  rewardPerSec_gt?: InputMaybe<Scalars['BigInt']>;
  rewardPerSec_lt?: InputMaybe<Scalars['BigInt']>;
  rewardPerSec_gte?: InputMaybe<Scalars['BigInt']>;
  rewardPerSec_lte?: InputMaybe<Scalars['BigInt']>;
  rewardPerSec_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardPerSec_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalStaked?: InputMaybe<Scalars['BigInt']>;
  totalStaked_not?: InputMaybe<Scalars['BigInt']>;
  totalStaked_gt?: InputMaybe<Scalars['BigInt']>;
  totalStaked_lt?: InputMaybe<Scalars['BigInt']>;
  totalStaked_gte?: InputMaybe<Scalars['BigInt']>;
  totalStaked_lte?: InputMaybe<Scalars['BigInt']>;
  totalStaked_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalStaked_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  interestRate?: InputMaybe<Scalars['BigDecimal']>;
  interestRate_not?: InputMaybe<Scalars['BigDecimal']>;
  interestRate_gt?: InputMaybe<Scalars['BigDecimal']>;
  interestRate_lt?: InputMaybe<Scalars['BigDecimal']>;
  interestRate_gte?: InputMaybe<Scalars['BigDecimal']>;
  interestRate_lte?: InputMaybe<Scalars['BigDecimal']>;
  interestRate_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  interestRate_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<StakingAPRInfo_filter>>>;
  or?: InputMaybe<Array<InputMaybe<StakingAPRInfo_filter>>>;
};

export type StakingAPRInfo_orderBy =
  | 'id'
  | 'rewardPerSec'
  | 'totalStaked'
  | 'interestRate';

export type StakingUser = {
  id: Scalars['ID'];
  user: Scalars['Bytes'];
  stakeIndex: Scalars['BigInt'];
  stakedAmount: Scalars['BigInt'];
  earnedAmount: Scalars['BigInt'];
};

export type StakingUser_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  user?: InputMaybe<Scalars['Bytes']>;
  user_not?: InputMaybe<Scalars['Bytes']>;
  user_gt?: InputMaybe<Scalars['Bytes']>;
  user_lt?: InputMaybe<Scalars['Bytes']>;
  user_gte?: InputMaybe<Scalars['Bytes']>;
  user_lte?: InputMaybe<Scalars['Bytes']>;
  user_in?: InputMaybe<Array<Scalars['Bytes']>>;
  user_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  user_contains?: InputMaybe<Scalars['Bytes']>;
  user_not_contains?: InputMaybe<Scalars['Bytes']>;
  stakeIndex?: InputMaybe<Scalars['BigInt']>;
  stakeIndex_not?: InputMaybe<Scalars['BigInt']>;
  stakeIndex_gt?: InputMaybe<Scalars['BigInt']>;
  stakeIndex_lt?: InputMaybe<Scalars['BigInt']>;
  stakeIndex_gte?: InputMaybe<Scalars['BigInt']>;
  stakeIndex_lte?: InputMaybe<Scalars['BigInt']>;
  stakeIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakeIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakedAmount?: InputMaybe<Scalars['BigInt']>;
  stakedAmount_not?: InputMaybe<Scalars['BigInt']>;
  stakedAmount_gt?: InputMaybe<Scalars['BigInt']>;
  stakedAmount_lt?: InputMaybe<Scalars['BigInt']>;
  stakedAmount_gte?: InputMaybe<Scalars['BigInt']>;
  stakedAmount_lte?: InputMaybe<Scalars['BigInt']>;
  stakedAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  earnedAmount?: InputMaybe<Scalars['BigInt']>;
  earnedAmount_not?: InputMaybe<Scalars['BigInt']>;
  earnedAmount_gt?: InputMaybe<Scalars['BigInt']>;
  earnedAmount_lt?: InputMaybe<Scalars['BigInt']>;
  earnedAmount_gte?: InputMaybe<Scalars['BigInt']>;
  earnedAmount_lte?: InputMaybe<Scalars['BigInt']>;
  earnedAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  earnedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<StakingUser_filter>>>;
  or?: InputMaybe<Array<InputMaybe<StakingUser_filter>>>;
};

export type StakingUser_orderBy =
  | 'id'
  | 'user'
  | 'stakeIndex'
  | 'stakedAmount'
  | 'earnedAmount';

export type Subscription = {
  c42161_ltoken?: Maybe<LToken>;
  c42161_ltokens: Array<LToken>;
  c42161_tvlchange?: Maybe<TVLChange>;
  c42161_tvlchanges: Array<TVLChange>;
  c42161_aprchange?: Maybe<APRChange>;
  c42161_aprchanges: Array<APRChange>;
  c42161_activity?: Maybe<Activity>;
  c42161_activities: Array<Activity>;
  c42161_rewardsMint?: Maybe<RewardsMint>;
  c42161_rewardsMints: Array<RewardsMint>;
  c42161_preMiningLock?: Maybe<PreMiningLock>;
  c42161_preMiningLocks: Array<PreMiningLock>;
  c42161_stakingUser?: Maybe<StakingUser>;
  c42161_stakingUsers: Array<StakingUser>;
  c42161_stakingAPRInfo?: Maybe<StakingAPRInfo>;
  c42161_stakingAPRInfos: Array<StakingAPRInfo>;
  c42161_affiliateUser?: Maybe<AffiliateUser>;
  c42161_affiliateUsers: Array<AffiliateUser>;
  c42161_affiliateActivity?: Maybe<AffiliateActivity>;
  c42161_affiliateActivities: Array<AffiliateActivity>;
  /** Access to subgraph metadata */
  c42161__meta?: Maybe<_Meta_>;
};


export type Subscriptionc42161_ltokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionc42161_ltokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionc42161_tvlchangeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionc42161_tvlchangesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TVLChange_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TVLChange_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionc42161_aprchangeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionc42161_aprchangesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<APRChange_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<APRChange_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionc42161_activityArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionc42161_activitiesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Activity_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Activity_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionc42161_rewardsMintArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionc42161_rewardsMintsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RewardsMint_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RewardsMint_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionc42161_preMiningLockArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionc42161_preMiningLocksArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PreMiningLock_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PreMiningLock_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionc42161_stakingUserArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionc42161_stakingUsersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StakingUser_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StakingUser_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionc42161_stakingAPRInfoArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionc42161_stakingAPRInfosArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StakingAPRInfo_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StakingAPRInfo_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionc42161_affiliateUserArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionc42161_affiliateUsersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AffiliateUser_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AffiliateUser_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionc42161_affiliateActivityArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionc42161_affiliateActivitiesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AffiliateActivity_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AffiliateActivity_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionc42161__metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type TVLChange = {
  id: Scalars['ID'];
  ltoken: LToken;
  timestamp: Scalars['BigInt'];
  amount: Scalars['BigDecimal'];
};

export type TVLChange_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  ltoken?: InputMaybe<Scalars['String']>;
  ltoken_not?: InputMaybe<Scalars['String']>;
  ltoken_gt?: InputMaybe<Scalars['String']>;
  ltoken_lt?: InputMaybe<Scalars['String']>;
  ltoken_gte?: InputMaybe<Scalars['String']>;
  ltoken_lte?: InputMaybe<Scalars['String']>;
  ltoken_in?: InputMaybe<Array<Scalars['String']>>;
  ltoken_not_in?: InputMaybe<Array<Scalars['String']>>;
  ltoken_contains?: InputMaybe<Scalars['String']>;
  ltoken_contains_nocase?: InputMaybe<Scalars['String']>;
  ltoken_not_contains?: InputMaybe<Scalars['String']>;
  ltoken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  ltoken_starts_with?: InputMaybe<Scalars['String']>;
  ltoken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ltoken_not_starts_with?: InputMaybe<Scalars['String']>;
  ltoken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ltoken_ends_with?: InputMaybe<Scalars['String']>;
  ltoken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ltoken_not_ends_with?: InputMaybe<Scalars['String']>;
  ltoken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ltoken_?: InputMaybe<LToken_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount?: InputMaybe<Scalars['BigDecimal']>;
  amount_not?: InputMaybe<Scalars['BigDecimal']>;
  amount_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TVLChange_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TVLChange_filter>>>;
};

export type TVLChange_orderBy =
  | 'id'
  | 'ltoken'
  | 'ltoken__id'
  | 'ltoken__symbol'
  | 'ltoken__decimals'
  | 'ltoken__totalMintedRewards'
  | 'timestamp'
  | 'amount';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Bytes']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  c42161_ltoken: InContextSdkMethod<Query['c42161_ltoken'], Queryc42161_ltokenArgs, MeshContext>,
  /** null **/
  c42161_ltokens: InContextSdkMethod<Query['c42161_ltokens'], Queryc42161_ltokensArgs, MeshContext>,
  /** null **/
  c42161_tvlchange: InContextSdkMethod<Query['c42161_tvlchange'], Queryc42161_tvlchangeArgs, MeshContext>,
  /** null **/
  c42161_tvlchanges: InContextSdkMethod<Query['c42161_tvlchanges'], Queryc42161_tvlchangesArgs, MeshContext>,
  /** null **/
  c42161_aprchange: InContextSdkMethod<Query['c42161_aprchange'], Queryc42161_aprchangeArgs, MeshContext>,
  /** null **/
  c42161_aprchanges: InContextSdkMethod<Query['c42161_aprchanges'], Queryc42161_aprchangesArgs, MeshContext>,
  /** null **/
  c42161_activity: InContextSdkMethod<Query['c42161_activity'], Queryc42161_activityArgs, MeshContext>,
  /** null **/
  c42161_activities: InContextSdkMethod<Query['c42161_activities'], Queryc42161_activitiesArgs, MeshContext>,
  /** null **/
  c42161_rewardsMint: InContextSdkMethod<Query['c42161_rewardsMint'], Queryc42161_rewardsMintArgs, MeshContext>,
  /** null **/
  c42161_rewardsMints: InContextSdkMethod<Query['c42161_rewardsMints'], Queryc42161_rewardsMintsArgs, MeshContext>,
  /** null **/
  c42161_preMiningLock: InContextSdkMethod<Query['c42161_preMiningLock'], Queryc42161_preMiningLockArgs, MeshContext>,
  /** null **/
  c42161_preMiningLocks: InContextSdkMethod<Query['c42161_preMiningLocks'], Queryc42161_preMiningLocksArgs, MeshContext>,
  /** null **/
  c42161_stakingUser: InContextSdkMethod<Query['c42161_stakingUser'], Queryc42161_stakingUserArgs, MeshContext>,
  /** null **/
  c42161_stakingUsers: InContextSdkMethod<Query['c42161_stakingUsers'], Queryc42161_stakingUsersArgs, MeshContext>,
  /** null **/
  c42161_stakingAPRInfo: InContextSdkMethod<Query['c42161_stakingAPRInfo'], Queryc42161_stakingAPRInfoArgs, MeshContext>,
  /** null **/
  c42161_stakingAPRInfos: InContextSdkMethod<Query['c42161_stakingAPRInfos'], Queryc42161_stakingAPRInfosArgs, MeshContext>,
  /** null **/
  c42161_affiliateUser: InContextSdkMethod<Query['c42161_affiliateUser'], Queryc42161_affiliateUserArgs, MeshContext>,
  /** null **/
  c42161_affiliateUsers: InContextSdkMethod<Query['c42161_affiliateUsers'], Queryc42161_affiliateUsersArgs, MeshContext>,
  /** null **/
  c42161_affiliateActivity: InContextSdkMethod<Query['c42161_affiliateActivity'], Queryc42161_affiliateActivityArgs, MeshContext>,
  /** null **/
  c42161_affiliateActivities: InContextSdkMethod<Query['c42161_affiliateActivities'], Queryc42161_affiliateActivitiesArgs, MeshContext>,
  /** Access to subgraph metadata **/
  c42161__meta: InContextSdkMethod<Query['c42161__meta'], Queryc42161__metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  c42161_ltoken: InContextSdkMethod<Subscription['c42161_ltoken'], Subscriptionc42161_ltokenArgs, MeshContext>,
  /** null **/
  c42161_ltokens: InContextSdkMethod<Subscription['c42161_ltokens'], Subscriptionc42161_ltokensArgs, MeshContext>,
  /** null **/
  c42161_tvlchange: InContextSdkMethod<Subscription['c42161_tvlchange'], Subscriptionc42161_tvlchangeArgs, MeshContext>,
  /** null **/
  c42161_tvlchanges: InContextSdkMethod<Subscription['c42161_tvlchanges'], Subscriptionc42161_tvlchangesArgs, MeshContext>,
  /** null **/
  c42161_aprchange: InContextSdkMethod<Subscription['c42161_aprchange'], Subscriptionc42161_aprchangeArgs, MeshContext>,
  /** null **/
  c42161_aprchanges: InContextSdkMethod<Subscription['c42161_aprchanges'], Subscriptionc42161_aprchangesArgs, MeshContext>,
  /** null **/
  c42161_activity: InContextSdkMethod<Subscription['c42161_activity'], Subscriptionc42161_activityArgs, MeshContext>,
  /** null **/
  c42161_activities: InContextSdkMethod<Subscription['c42161_activities'], Subscriptionc42161_activitiesArgs, MeshContext>,
  /** null **/
  c42161_rewardsMint: InContextSdkMethod<Subscription['c42161_rewardsMint'], Subscriptionc42161_rewardsMintArgs, MeshContext>,
  /** null **/
  c42161_rewardsMints: InContextSdkMethod<Subscription['c42161_rewardsMints'], Subscriptionc42161_rewardsMintsArgs, MeshContext>,
  /** null **/
  c42161_preMiningLock: InContextSdkMethod<Subscription['c42161_preMiningLock'], Subscriptionc42161_preMiningLockArgs, MeshContext>,
  /** null **/
  c42161_preMiningLocks: InContextSdkMethod<Subscription['c42161_preMiningLocks'], Subscriptionc42161_preMiningLocksArgs, MeshContext>,
  /** null **/
  c42161_stakingUser: InContextSdkMethod<Subscription['c42161_stakingUser'], Subscriptionc42161_stakingUserArgs, MeshContext>,
  /** null **/
  c42161_stakingUsers: InContextSdkMethod<Subscription['c42161_stakingUsers'], Subscriptionc42161_stakingUsersArgs, MeshContext>,
  /** null **/
  c42161_stakingAPRInfo: InContextSdkMethod<Subscription['c42161_stakingAPRInfo'], Subscriptionc42161_stakingAPRInfoArgs, MeshContext>,
  /** null **/
  c42161_stakingAPRInfos: InContextSdkMethod<Subscription['c42161_stakingAPRInfos'], Subscriptionc42161_stakingAPRInfosArgs, MeshContext>,
  /** null **/
  c42161_affiliateUser: InContextSdkMethod<Subscription['c42161_affiliateUser'], Subscriptionc42161_affiliateUserArgs, MeshContext>,
  /** null **/
  c42161_affiliateUsers: InContextSdkMethod<Subscription['c42161_affiliateUsers'], Subscriptionc42161_affiliateUsersArgs, MeshContext>,
  /** null **/
  c42161_affiliateActivity: InContextSdkMethod<Subscription['c42161_affiliateActivity'], Subscriptionc42161_affiliateActivityArgs, MeshContext>,
  /** null **/
  c42161_affiliateActivities: InContextSdkMethod<Subscription['c42161_affiliateActivities'], Subscriptionc42161_affiliateActivitiesArgs, MeshContext>,
  /** Access to subgraph metadata **/
  c42161__meta: InContextSdkMethod<Subscription['c42161__meta'], Subscriptionc42161__metaArgs, MeshContext>
  };

  export type Context = {
      ["arbitrum"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
