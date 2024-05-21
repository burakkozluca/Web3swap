import React, { useEffect, useState } from "react";
import "./CSS/Pages.css";
import SelectToken from "../Components/SelectToken/SelectToken";

const Home = () => {
  const [amount1, setAmount1] = useState(0);
  const [amount2, setAmount2] = useState(0);
  const [selectedCoin1, setSelectedCoin1] = useState(null);
  const [selectedCoin2, setSelectedCoin2] = useState(null);
  const [estimatedGas, setEstimatedGas] = useState("");

  const [coins, setCoins] = useState([]);

  const handleSelectChange1 = (coinId) => {
    const coin = coins.find((c) => c.id === coinId);
    setSelectedCoin1(coin);
  };

  const handleSelectChange2 = (coinId) => {
    const coin = coins.find((c) => c.id === coinId);
    setSelectedCoin2(coin);
  };

  useEffect(() => {
    const fetcCoinGecko = async () => {
      const urlMarketCapitalTen =
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1";
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          "x-cg-demo-api-key": "CG-EuXL6u3vtLzpKN7yEVzv6cb2",
        },
      };

      try {
        const res = await fetch(urlMarketCapitalTen, options);
        const data = await res.json();
        setCoins(data);
      } catch (err) {
        console.error("error:", err);
      }
    };

    fetcCoinGecko();
  }, []);

  useEffect(() => {
    if (selectedCoin1 && selectedCoin2) {
      const amountLast =
        (parseFloat(selectedCoin1.current_price) * parseFloat(amount1)) /
        parseFloat(selectedCoin2.current_price);

      setAmount2(amountLast);
    }
  }, [selectedCoin1, amount1, selectedCoin2]);

  return (
    <div>
      <div className="swap-container">
        <h2 className="swap-header">Token Swap</h2>
        <div className="swap-box">
          <div className="input-group">
            {coins.length > 0 ? (
              <SelectToken
                coins={coins}
                handleSelectChange={handleSelectChange1}
                selectedCoin={selectedCoin1}
              />
            ) : (
              <p>Loading coins...</p>
            )}
            <input
              type="text"
              placeholder="Amount"
              value={amount1}
              onChange={(e) => setAmount1(e.target.value)}
              className="custom-input ml-2"
              style={{ width: "100%" }}
            />
          </div>

          <div className="input-group">
            {coins.length > 0 ? (
              <SelectToken
                coins={coins}
                handleSelectChange={handleSelectChange2}
                selectedCoin={selectedCoin2}
              />
            ) : (
              <p>Loading coins...</p>
            )}
            <input
              type="text"
              placeholder="Amount"
              value={amount2}
              className="custom-input ml-2"
              style={{ width: "100%" }}
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
