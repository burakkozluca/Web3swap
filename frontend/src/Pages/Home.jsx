import React, { useEffect, useState } from "react";
import "./CSS/Pages.css";

const Home = () => {
  const [amount1, setAmount1] = useState("");
  const [amount2, setAmount2] = useState("");
  const [estimatedGas, setEstimatedGas] = useState("");

  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchCoins = async () => {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      const data = await response.json();
      setCoins(data);
      console.log(data)
    };

    fetchCoins();
  }, []);

  return (
    <div className="home">
      <div className="swap-container">
        <h2 className="swap-header">Token Swap</h2> {/* Başlık eklendi */}
        <div className="swap-box">
          <div className="input-group">
            <select>
              {coins.map((coin) => (
                <option key={coin.id} value={coin.id}>
                  {coin.name} ({coin.symbol.toUpperCase()})
                </option>
              ))}
            </select>
            <input
              type="text"
              value={amount1}
              onChange={(e) => setAmount1(e.target.value)}
              placeholder="amount"
            />
          </div>
          <div className="input-group">
          <select>
              {coins.map((coin) => (
                <option key={coin.id} value={coin.id}>
                  <img src={coin.image} alt="" />
                 {coin.name} ({coin.symbol.toUpperCase()})
                </option>
              ))}
            </select>
            <input
              type="text"
              value={amount2}
              onChange={(e) => setAmount2(e.target.value)}
              placeholder="amount"
            />
          </div>
          <div className="estimated-gas">
            <label>Estimated Gas: {estimatedGas}</label>
          </div>
          <button
            className="swap-button"
            onClick={() => {
              /* Swap fonksiyonu çağrısı */
            }}
          >
            Swap
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
