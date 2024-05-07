import React, { useEffect, useState } from "react";
import "./CSS/Pages.css";

const Home = () => {
  const [amount1, setAmount1] = useState(0);
  const [amount2, setAmount2] = useState(0);
  const [selectedCoinId1, setSelectedCoinId1] = useState(0);
  const [selectedCoinId2, setSelectedCoinId2] = useState(0);
  const [estimatedGas, setEstimatedGas] = useState("");

  const [coins, setCoins] = useState([]);
  const [ticker, setTicker] = useState([])

  const handleSelectChange = (event) => {
    setSelectedCoinId1(event.target.value);
  };
  const handleSelectChange2 = (event) => {
    setSelectedCoinId2(event.target.value);
  };

  useEffect(() => {
    function fetchCoinData() {
      fetch("http://localhost:4000/coins")
        .then((response) => response.json())
        .then((data) => {
          setTicker(data);
          const filteredCoins = ['BTCUSDT', 'ETHUSDT'].map(key => ({
            id: key,
            price: data[key]
          }));
          filteredCoins.push({
            id: 'USD',
            price: 1
          })
          setCoins(filteredCoins); // Filtrelenmiş coin listesini state'e kaydet
          console.log(filteredCoins); // Konsola yazdır
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
    fetchCoinData()
  }, []);

  useEffect(() => {
    console.log("Selected Coin ID:", selectedCoinId1);
    console.log("Amount değeri : ", amount1)
    console.log("Selected Coin ID2:", selectedCoinId2);
    console.log("Amount değeri2 : ", amount2)

    const amountLast = (parseFloat(selectedCoinId1) * parseFloat(amount1)) /parseFloat(selectedCoinId2)

    setAmount2(amountLast)
    console.log("Amount last: ", amountLast)

    // Burada, seçilen coin ile ilgili işlemleri yapabilirsiniz, örneğin:
    // - Döviz kurlarını güncelleyebilirsiniz.
    // - Tahmini gaz ücretlerini hesaplayabilirsiniz.
  }, [selectedCoinId1, amount1,selectedCoinId2,amount2]);

  return (
    <div className="home">
      <div className="swap-container">
        <h2 className="swap-header">Token Swap</h2> {/* Başlık eklendi */}
        <div className="swap-box">
          <div className="input-group">
            <select value={selectedCoinId1} onChange={handleSelectChange}>
              {coins.map((coin) => (
                <option key={coin.key} value={coin.price}>
                  {coin.id} - ${coin.price}
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
            <select value={selectedCoinId2} onChange={handleSelectChange2}>
              {coins.map((coin) => (
                <option key={coin.id} value={coin.price}>
                  {coin.id} - ${coin.price}
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
            <label>Estimated Gas12: {estimatedGas}</label>
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
