import Navbar from "../components/navbar";
import {
  AdvancedChart,
  CryptocurrencyMarket,
  MarketOverview,
  TickerTape,
} from "react-tradingview-embed";
import Footer from "../components/footer";
import styles from "../styles/charts.module.scss";

const Charts = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.tickerTapeWrap}>
          <TickerTape
            widgetProps={{
              symbols: [
                { proName: "BINANCE:HBARUSD", title: "HBAR/USD" },
                { proName: "BITSTAMP:BTCUSD", title: "BTC/USD" },
                { proName: "BITSTAMP:ETHUSD", title: "ETH/USD" },
                { proName: "BINANCE:BNBUSD", title: "BNB/USD" },
                { proName: "BINANCE:LINKUSD", title: "LINK/USD" },
              ],
            }}
          />
        </div>
        <div className={styles.chartsWrap}>
          <div className={styles.topCharts}>
            <div className={styles.advChart}>
              {/* Interestingly, AdvancedChart applies height: 100% on its parent div... */}
              <div>
                <AdvancedChart
                  widgetProps={{
                    width: "100%",
                    height: "100%",
                    theme: "dark",
                    symbol: "BINANCE:HBARUSD",
                  }}
                />
              </div>
            </div>
            <div className={styles.mrktOverview}>
              <MarketOverview
                widgetProps={{
                  width: "100%",
                  isTransparent: true,
                  tabs: [
                    {
                      title: "Indices",
                      symbols: [
                        { s: "BINANCE:HBARUSD", d: "" },
                        { s: "BINANCE:HBARBTC", d: "" },
                        { s: "BITTREX:HBARETH", d: "" },
                        { s: "COINBASE:BTCUSD", d: "" },
                      ],
                    },
                  ],
                }}
              />
            </div>
          </div>
          <div className={styles.ccMarket}>
            <CryptocurrencyMarket
              widgetProps={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Charts;
