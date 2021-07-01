import styles from "../styles/Home.module.scss";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <Navbar isHomePage={true} />
      <Hero />
    </>
  );
};
export default Home;
