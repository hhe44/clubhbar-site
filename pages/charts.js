import Navbar from "../components/navbar";
import {
  AdvancedChart,
  CryptocurrencyMarket,
  TickerTape,
} from "react-tradingview-embed";
import Footer from "../components/footer";
import styles from "../styles/Charts.module.scss";

const Charts = () => {
  return (
    <>
      <Navbar isChartPage={true} />
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
          <div className={styles.advChart}>
            <AdvancedChart
              widgetProps={{
                theme: "dark",
                symbol: "BINANCE:HBARUSD",
              }}
            />
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
