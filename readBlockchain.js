const { ethers } = require("ethers");
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/28f029bc75b84ed9a1cce9c27495011b`);

const queryBlockchain = async () => {
    const block = await provider.getBlockNumber();
    console.log("current Block Number:", block);
}

queryBlockchain();
