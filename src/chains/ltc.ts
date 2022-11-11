// https://github.com/litecoin-project/litecoin/blob/master-0.10/src/chainparams.cpp

import { Common, Network, TestNetwork } from '../types';

const common: Common = {
  name: 'Litecoin',
  unit: 'LTC',
  decimalPlaces: 1e8,
  /** https://github.com/litecoin-project/litecoin/blob/master/src/util/message.cpp#L22 */
  messagePrefix: 'Litecoin Signed Message:\n',
};

const main: Network = {
  ...common,
  hashGenesisBlock:
    '12a765e31ffd4059bada1e25190f6e98c99d9714d334efa41a195a7e7e04bfe2',
  port: 9333,
  portRpc: 9332,
  protocol: {
    magic: 0xdbb6c0fb,
  },
  bech32: 'ltc',
  seedsDns: [
    'dnsseed.litecointools.com',
    'dnsseed.litecoinpool.org',
    'dnsseed.ltc.xurious.com',
    'dnsseed.koin-project.com',
    'dnsseed.weminemnc.com',
  ],
  versions: {
    bip32: {
      private: 0x019d9cfe,
      public: 0x019da462,
    },
    bip44: 2,
    private: 0xb0,
    public: 0x30,
    scripthash: 0x32,
    scripthash2: 0x05, // old '3' prefix. available for backward compatibility.
  },
};

const test: TestNetwork = {
  ...common,
  hashGenesisBlock:
    'f5ae71e26c74beacc88382716aced69cddf3dffff24f384e1808905e0188f68f',
  port: 19335,
  portRpc: 19332,
  bech32: 'tltc',
  versions: {
    bip32: {
      private: 0x0436ef7d,
      public: 0x0436f6e1,
    },
    bip44: 1,
    private: 0xef,
    public: 0x6f,
    scripthash: 0x3a,
    scripthash2: 0xc4,
  },
};

export const ltc = {
  main,
  test,
};
