// SPDX-License-Identifier: Apache-2.0

import { ConfigService } from '@hashgraph/json-rpc-config-service/dist/services';
import { Client } from '@hashgraph/sdk';

import { JsonRpcError, Net, predefined } from '../index';

export class NetImpl implements Net {
  private client: Client;
  private readonly chainId: string;

  constructor(client: Client) {
    this.client = client;

    this.chainId = parseInt(ConfigService.get('CHAIN_ID'), 16).toString();
  }

  /**
   * We always return true for this.
   */
  listening(): boolean {
    return false;
  }

  /**
   * This is the chain id we registered.
   */
  version(): string {
    return this.chainId;
  }

  /**
   * Always returns UNSUPPORTED_METHOD error.
   */
  peerCount(): JsonRpcError {
    return predefined.UNSUPPORTED_METHOD;
  }
}
