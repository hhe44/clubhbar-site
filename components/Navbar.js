import styles from "./Navbar.module.scss";

// Send GET request to coingecko for HBAR prices in future

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}></div>
      <ul className={styles.nav}>
        <li>LEARN</li>
        <li>USE</li>
        <li>COMMUNITY</li>
        <li>CHART</li>
      </ul>
      <div className={styles.price}>
        <p>Current HBAR Price: </p>
      </div>
    </div>
  );
};

export default Navbar;
