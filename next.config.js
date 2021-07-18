module.exports = {
  reactStrictMode: true,
}

const withTM = require('next-transpile-modules')(['react-tradingview-embed']); // pass the modules you would like to see transpiled

module.exports = withTM();