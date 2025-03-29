import web3 from "./web3";

const address = "<Deployed_Contract_Address>";
const abi = [
    // Add your contract's ABI here (from Truffle build artifacts)
    {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [{ "name": "", "type": "uint256" }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },

];

const MyNFT = new web3.eth.Contract(abi, address);

export default MyNFT;