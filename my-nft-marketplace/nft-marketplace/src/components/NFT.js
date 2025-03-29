import React, { useState } from "react";
import MyNFT from "../MyNFT";
import web3 from "../web3";

const NFT = () => {
    const [tokenURI, setTokenURI] = useState("");

    const mintNFT = async () => {
        const accounts = await web3.eth.getAccounts();
        await MyNFT.methods.mintNFT(accounts[0], tokenURI).send({ from: accounts[0] });
        alert("NFT Minted!");
    };

    return (
        <div>
            <h1>Mint Your NFT</h1>
            <input
                type="text"
                placeholder="Token URI"
                value={tokenURI}
                onChange={(e) => setTokenURI(e.target.value)}
            />
            <button onClick={mintNFT}>Mint</button>
        </div>
    );
};

export default NFT;