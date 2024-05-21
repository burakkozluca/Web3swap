const port = 4000;
const express = require("express");
const app = express();
const cors = require("cors");
const Binance = require("node-binance-api");
const fetch = require('node-fetch');
const http = require('http');
const socketIo = require('socket.io');

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log('Yeni bir kullanıcı bağlandı:', socket.id);

  // Kullanıcı mesaj gönderdiğinde bu mesajı tüm kullanıcılara ilet
  socket.on('message', (message) => {
    console.log('Mesaj alındı:', message);
    socket.broadcast.emit('message', message) // Tüm bağlı kullanıcılara mesajı gönder
  });

  socket.on('disconnect', () => {
    console.log('Kullanıcı ayrıldı:', socket.id);
  });
});

const api_key = "s7DSYB2VHOsxz24ZiR9pMmlxzwJIjMgY225ypc31b1bcnRGBEvStWsDSm20Kmuev";
const api_secret = "OMGnXrLvXNmgt8zjOf1rgRtHWQHLkckRQL8BZPDqBhNvzOtMjNfbtzsD8TIxGirL";

const api_key_coingecko = "CG-EuXL6u3vtLzpKN7yEVzv6cb2"

const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd';
const options = {
  method: 'GET',
  headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-EuXL6u3vtLzpKN7yEVzv6cb2'}
};

fetch(url, options)
  .then(res => res.json())
  .then(data => {
    // Kripto para birimlerinin her biri için name, symbol ve current_price bilgilerini yazdır
    data.forEach(coin => {
      console.log(`Name: ${coin.name}, Symbol: ${coin.symbol}, Price: ${coin.current_price} USD`);
    });
  })
  .catch(err => console.error('error:' + err));

const binance = new Binance().options({
  APIKEY: api_key,
  APISECRET: api_secret,
  useServerTime: true,
  test: true, // Bu satırı canlı ortama geçiş yapmadan önce kaldırın
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Express App is Running");
});

app.get("/coins", async (req, res) => {
  binance.prices((error, ticker) => {
    if (error) {
      console.error(error);
    } else {
      const symbols = Object.keys(ticker);
      res.send(ticker);
      const filteredCoins = Object.keys(ticker).filter(
        (coin) => coin === "BTCUSDT" || coin === "ETHUSDT"
      );

      const btcPrice = ticker["BTCUSDT"];
      const ethPrice = ticker["ETHUSDT"];
      console.log(`BTCUSDT: ${btcPrice}`);
      console.log(`ETHUSDT: ${ethPrice}`);
      // const symbols = Object.keys(data);
      for (const symbol in filteredCoins) {
        const price = filteredCoins[symbol];
        console.log(`${symbol}: ${price}`);
      }

      //console.log('Tüm semboller:', symbols);
      // console.log(ticker);
    }
  });
});

server.listen(port, (error) => {
  if (!error) {
    console.log("Server Running on Port " + port);
  } else {
    console.log("Error " + error);
  }
});
