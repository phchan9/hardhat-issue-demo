import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const KOVAN_RPC_URL = "https://kovan.optimism.io"
const MAINNET_RPC_URL = "https://mainnet.optimism.io"

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    "optimism-kovan": {
      url: KOVAN_RPC_URL,
      chainId: 69,
    },
    "optimism": {
      url: MAINNET_RPC_URL,
      chainId: 10,
    },
    "hardhat": {
      forking: {
        url: MAINNET_RPC_URL,
        blockNumber: 24251989
      }
    },
    // "localhost": {
    //   forking: {
    //     url: MAINNET_RPC_URL,
    //     blockNumber: 24140200
    //   }
    // }
  }
};

export default config;
