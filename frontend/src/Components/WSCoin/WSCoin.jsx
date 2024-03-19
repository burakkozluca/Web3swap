import React, { useState, useEffect } from 'react';
import ethLogo from '../Assest/logoblue.png';
import './WSCoin.css'; // CSS dosyasını ekleyin (kayansatir.css olarak adlandırabilirsiniz)

const CoinTicker = ({ symbol, logo, wsUrl }) => {
  const [tradeValue, setTradeValue] = useState('');
  const [prevPrice, setPrevPrice] = useState(null);
  const [colorClass, setColorClass] = useState('');

  useEffect(() => {
    const ws = new WebSocket(wsUrl);

    ws.onmessage = (e) => {
      const data = JSON.parse(e.data);
      const price = parseFloat(data.p).toFixed(2);

      if (prevPrice !== null) {
        setColorClass(price > prevPrice ? 'text-green-500' : 'text-red-500');
      }

      setPrevPrice(price);
      setTradeValue(price);
    };

    return () => {
      ws.close();
    };
  }, [prevPrice, wsUrl]);

  return (
    <div className={`ticker-item ${colorClass}`}>
      <img src={logo} alt={symbol} className="ticker-logo" />
      <p className="ticker-value">{tradeValue}$</p>
    </div>
  );
};

const TickerRow = () => {
  const tickers = [
    //{ wsUrl: 'wss://stream.binance.com:9443/ws/avaxusdt@trade' },
    { logo: ethLogo, wsUrl: 'wss://stream.binance.com:9443/ws/ethusdt@trade' },
    //{ symbol: 'ETH', logo: ethLogo, wsUrl: 'wss://stream.binance.com:9443/ws/ethusdt@trade'}
  ];

  return (
    <div className="ticker-row">
      {tickers.map((ticker, index) => (
        <CoinTicker key={index} {...ticker} />
      ))}
    </div>
  );
};

const WSCoin = () => {
  return (
    <div>
      <TickerRow />
      {/* Add other components or content as needed */}
    </div>
  );
};

export default WSCoin;
