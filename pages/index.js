import styles from "../styles/Home.module.scss";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className={styles.container}>
      <Navbar isHomePage={true} />
      <Hero />
      <Footer />
    </div>
  );
};
export default Home;
