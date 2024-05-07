import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

const ConnectWallet = () => {
    const [account, setAccount] = useState(null);
    const [balance, setBalance] = useState(null);

    // Ethers Provider'ı kullanarak bağlantıyı ve bakiye sorgulamayı yöneten fonksiyon
    const getBalance = async (provider, address) => {
        const balance = await provider.getBalance(address);
        const formattedBalance = ethers.utils.formatEther(balance);
        setBalance(formattedBalance);
    };

    // Cüzdan bağlantısını başlatma fonksiyonu
    const connectWalletHandler = async () => {
        if (window.ethereum && window.ethereum.isMetaMask) {
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                setAccount(accounts[0]);
                await getBalance(provider, accounts[0]);
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
                <div>
                    <p>Connected as: {account}</p>
                    <p>Balance: {balance} ETH</p>
                </div>
            ) : (
                <button onClick={connectWalletHandler}>Connect</button>
            )}
        </div>
    );
};

export default ConnectWallet;
