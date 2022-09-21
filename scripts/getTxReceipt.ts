import { ethers } from "hardhat";

async function main() {
    const txHash = "0xbc95a0d2c9e55d4cea586d88c1dd33ab9b2e3e2bd72ca5a856825e720fcea97b"

    const chainId = await ethers.provider.send("eth_chainId", [])
    console.log('debug: ', 'chainId', chainId)
    const blockNumber = await ethers.provider.getBlockNumber()
    console.log('debug: ', 'blockNumber', blockNumber)

    console.log("debug", "check this tx", txHash)
    const receipt = await ethers.provider.getTransactionReceipt(txHash)
    console.log("debug", "receipt", receipt)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
