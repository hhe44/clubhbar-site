import styles from "../styles/Home.module.scss";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar isHomePage={true} />
      <Hero />
      <div className={styles.container}>
        
      </div>
      <Footer />
    </>
  );
};
export default Home;
