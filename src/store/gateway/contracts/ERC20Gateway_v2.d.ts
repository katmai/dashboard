/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractOptions, Options } from "web3-eth-contract";
import { Block } from "web3-eth";
import { EventLog } from "web3-core";
import { EventEmitter } from "events";
import { Callback, TransactionObject } from "./types";

export class ERC20Gateway_v2 extends Contract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  );
  methods: {
    nonces(arg0: string): TransactionObject<string>;

    getERC20(contractAddress: string): TransactionObject<string>;

    withdrawERC20(
      amount: number | string,
      contractAddress: string,
      _signersIndexes: (number | string)[],
      _v: (number | string)[],
      _r: (string | number[])[],
      _s: (string | number[])[]
    ): TransactionObject<void>;

    depositERC20(
      amount: number | string,
      contractAddress: string
    ): TransactionObject<void>;

    vmc(): TransactionObject<string>;
    loomAddress(): TransactionObject<string>;
  };
  events: {
    TokenWithdrawn(
      options?: {
        filter?: object;
        fromBlock?: number | string;
        topics?: (null | string)[];
      },
      cb?: Callback<EventLog>
    ): EventEmitter;

    LoomCoinReceived(
      options?: {
        filter?: object;
        fromBlock?: number | string;
        topics?: (null | string)[];
      },
      cb?: Callback<EventLog>
    ): EventEmitter;

    ERC20Received(
      options?: {
        filter?: object;
        fromBlock?: number | string;
        topics?: (null | string)[];
      },
      cb?: Callback<EventLog>
    ): EventEmitter;

    allEvents: (
      options?: {
        filter?: object;
        fromBlock?: number | string;
        topics?: (null | string)[];
      },
      cb?: Callback<EventLog>
    ) => EventEmitter;
  };
}