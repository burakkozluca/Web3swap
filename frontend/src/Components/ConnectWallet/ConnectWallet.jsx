import React, { useState } from 'react';
import { ethers } from 'ethers';

const ConnectWallet = () => {
    const [account, setAccount] = useState(null);

    // Cüzdan bağlantısını başlatma fonksiyonu
    const connectWalletHandler = async () => {
        // window.ethereum nesnesine erişim sağlama
        if (window.ethereum && window.ethereum.isMetaMask) {
            try {
                // MetaMask ile etkileşimde bulunma ve hesapları alma
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                // İlk hesabı seçme
                setAccount(accounts[0]);
            } catch (error) {
                console.error("Error connecting to MetaMask", error);
            }
        } else {
            alert("Please install MetaMask.");
        }
    };

    return (
        <div>
            {account ? (
                <p>Connected as: {account}</p>
            ) : (
                <button onClick={connectWalletHandler}>Connect</button>
            )}
        </div>
    );
};

export default ConnectWallet;
