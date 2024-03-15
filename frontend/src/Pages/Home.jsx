import React, { useState } from "react";
import "./CSS/Pages.css";

const Home = () => {
  const [token1, setToken1] = useState("");
  const [amount1, setAmount1] = useState("");
  const [token2, setToken2] = useState("");
  const [amount2, setAmount2] = useState("");
  const [estimatedGas, setEstimatedGas] = useState("");

  return (
    <div className="home">
      <div className="swap-container">
      <h2 className="swap-header">Token Swap</h2> {/* Başlık eklendi */}
        <div className="swap-box">
          <div className="input-group">
            <select value={token1} onChange={(e) => setToken1(e.target.value)}>
              {/* Token listesi opsiyonları buraya ekleyin */}
              <option value="">Select a Token</option>
            </select>
            <input
              type="text"
              value={amount1}
              onChange={(e) => setAmount1(e.target.value)}
              placeholder="amount"
            />
          </div>
          <div className="input-group">
            <select value={token2} onChange={(e) => setToken2(e.target.value)}>
              {/* Token listesi opsiyonları buraya ekleyin */}
              <option value="">Select a Token</option>
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
