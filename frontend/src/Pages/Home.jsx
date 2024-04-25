import React, { useEffect, useState } from "react";
import "./CSS/Pages.css";

const Home = () => {
  const [token1, setToken1] = useState("");
  const [amount1, setAmount1] = useState("");
  const [token2, setToken2] = useState("");
  const [amount2, setAmount2] = useState("");
  const [estimatedGas, setEstimatedGas] = useState("");

  const [coins, setCoins] = useState([]);
  const [ticker, setTicker] = useState([])

  useEffect(() => {


    function fetchCoinData() {
      fetch("http://localhost:4000/coins")
        .then((response) => response.json())
        .then((data) => {
          setTicker(data);
          const symbols = Object.keys(data);
          setCoins(symbols);
          console.log(data); 
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
    fetchCoinData()
    // fetch("http://localhost:4000/coins")
    //   .then((response) => response.json())
    //   .then((data) => setTicker(data));
    //   const symbols = Object.keys(ticker);
    //   setCoins(symbols)
    // console.log(ticker);
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
                  {coin} ({coin.symbol})
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
                  {coin} ({coin.symbol})
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
