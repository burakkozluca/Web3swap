const port = 4000;
const express = require("express")
const app = express()
const cors = require("cors")
const Binance = require('node-binance-api');

const api_key = 's7DSYB2VHOsxz24ZiR9pMmlxzwJIjMgY225ypc31b1bcnRGBEvStWsDSm20Kmuev';
const api_secret = 'OMGnXrLvXNmgt8zjOf1rgRtHWQHLkckRQL8BZPDqBhNvzOtMjNfbtzsD8TIxGirL';

const binance = new Binance().options({
  APIKEY: api_key,
  APISECRET: api_secret,
  useServerTime: true,
  test: true // Bu satırı canlı ortama geçiş yapmadan önce kaldırın
});

app.use(express.json())
app.use(cors())

app.get("/" , (req,res)=>{
  res.send("Express App is Running")
})

app.get('/coins', async(req,res) =>{
  binance.prices((error, ticker) => {
    if (error) {
      console.error(error);
    } else {
      const symbols = Object.keys(ticker);
      res.send(ticker)
      console.log('Tüm semboller:', symbols);
    }
  });
})

binance.prices((error, ticker) => {
  if (error) {
    console.error(error);
  } else {
    const symbols = Object.keys(ticker);
    console.log('Tüm semboller:', symbols);
  }
});


const fetchCoin = async (req,res) =>{

  binance.prices((error, ticker) => {
    if (error) {
      console.error(error);
    } else {
      const symbols = Object.keys(ticker);
      res.send(symbols)
      console.log('Tüm semboller:', symbols);
    }
  });
}

app.listen(port,(error)=>{
  if(!error){
    console.log("Server Running on Port " + port);
  } else{
    console.log("Error " + error );
  }
})