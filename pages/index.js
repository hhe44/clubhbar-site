import styles from "../styles/Home.module.scss";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const COINGECKO_HBAR_PRICE_API = "https://api.coingecko.com/api/v3/simple/price?ids=hedera-hashgraph&vs_currencies=usd";

export const getServerSideProps = async () => {
  const res = await fetch(`${COINGECKO_HBAR_PRICE_API}`);
  const data = await res.json();
  const price = data["hedera-hashgraph"].usd;
  return { props: { price } };
};

const Home = ({ price }) => {
  return (
    <>
      <Navbar price={price} />
      <Hero />
    </>
  );
};
export default Home;
