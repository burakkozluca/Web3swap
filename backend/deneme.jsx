const Binance = require('node-binance-api');

const api_key = 's7DSYB2VHOsxz24ZiR9pMmlxzwJIjMgY225ypc31b1bcnRGBEvStWsDSm20Kmuev';
const api_secret = 'OMGnXrLvXNmgt8zjOf1rgRtHWQHLkckRQL8BZPDqBhNvzOtMjNfbtzsD8TIxGirL';

const binance = new Binance().options({
  APIKEY: api_key,
  APISECRET: api_secret,
  useServerTime: true,
  test: true // Bu satırı canlı ortama geçiş yapmadan önce kaldırın
});

binance.prices((error, ticker) => {
  if (error) {
    console.error(error);
  } else {
    const symbols = Object.keys(ticker);
    console.log('Tüm semboller:', symbols);
  }
});
