# Introduction
This repo is used to demonstrate the issue.

# Reproduce Steps
Start hardhat node locally,
```shell
npx hardhat node --fork https://mainnet.optimism.io
```

Run the following commands in another terminal to see the difference.
First, we run the script in local hardhat node (forking from optimism mainnet)
```shell
npx hardhat run scripts/getTxReceipt.ts --network localhost
debug:  chainId 0x7a69
debug:  blockNumber 24255420
debug check this tx 0xbc95a0d2c9e55d4cea586d88c1dd33ab9b2e3e2bd72ca5a856825e720fcea97b
ProviderError: HttpProviderError
    at HttpProvider.request (/Users/phchan9/Code/work/perp/hardhat-issue/node_modules/hardhat/src/internal/core/providers/http.ts:78:19)
    at AutomaticSenderProvider.request (/Users/phchan9/Code/work/perp/hardhat-issue/node_modules/hardhat/src/internal/core/providers/accounts.ts:341:34)
    at AutomaticGasProvider.request (/Users/phchan9/Code/work/perp/hardhat-issue/node_modules/hardhat/src/internal/core/providers/gas-providers.ts:135:34)
    at AutomaticGasPriceProvider.request (/Users/phchan9/Code/work/perp/hardhat-issue/node_modules/hardhat/src/internal/core/providers/gas-providers.ts:153:36)
    at BackwardsCompatibilityProviderAdapter.send (/Users/phchan9/Code/work/perp/hardhat-issue/node_modules/hardhat/src/internal/core/providers/backwards-compatibility.ts:36:27)
    at EthersProviderWrapper.send (/Users/phchan9/Code/work/perp/hardhat-issue/node_modules/@nomiclabs/hardhat-ethers/src/internal/ethers-provider-wrapper.ts:13:48)
    at EthersProviderWrapper.<anonymous> (/Users/phchan9/Code/work/perp/hardhat-issue/node_modules/@ethersproject/providers/src.ts/json-rpc-provider.ts:640:31)
    at step (/Users/phchan9/Code/work/perp/hardhat-issue/node_modules/@ethersproject/providers/lib/json-rpc-provider.js:48:23)
    at Object.next (/Users/phchan9/Code/work/perp/hardhat-issue/node_modules/@ethersproject/providers/lib/json-rpc-provider.js:29:53)
    at /Users/phchan9/Code/work/perp/hardhat-issue/node_modules/@ethersproject/providers/lib/json-rpc-provider.js:23:71
```
and we could see the log in hardhat node console
```shell
eth_getTransactionReceipt

  Invalid JSON-RPC response's result.

  Errors: Invalid value undefined supplied to : RpcTransactionReceipt | null/to: ADDRESS | null

```


Then when we run the script in optimism mainnet,
```shell
$ npx hardhat run scripts/getTxReceipt.ts --network optimism
debug:  chainId 0xa
debug:  blockNumber 24256296
debug check this tx 0xbc95a0d2c9e55d4cea586d88c1dd33ab9b2e3e2bd72ca5a856825e720fcea97b
debug receipt {
  to: null,
  from: '0x069A67b8f965d02d095be12ae55E31e769692DF4',
  contractAddress: '0x77f8AE934E150Abd8e92Cc1cFCbEDAea940Ad8CB',
  transactionIndex: 0,
  gasUsed: BigNumber { value: "809007" },
  logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  blockHash: '0x65099164b55d0a85381dcb6801aabed0347a565e68ad58882c55036382a65f1c',
  transactionHash: '0xbc95a0d2c9e55d4cea586d88c1dd33ab9b2e3e2bd72ca5a856825e720fcea97b',
  logs: [],
  blockNumber: 24140211,
  confirmations: 116086,
  cumulativeGasUsed: BigNumber { value: "809007" },
  status: 1,
  type: 0,
  byzantium: true
}
```
