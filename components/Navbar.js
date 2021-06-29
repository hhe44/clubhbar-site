import styles from "./Navbar.module.scss";
import Image from "next/image";

// Send GET request to coingecko for HBAR prices in future

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left} style={{ position: 'relative', width: '11rem', height: '8rem' }}>
        <Image
          src="/images/clubhbar-logo.svg"
          layout='fill'
          objectFit="cover"
          alt="ClubHbar Logo"
        />
      </div>
      <ul className={styles.center}>
        <li>LEARN</li>
        <li>NEWS</li>
        <li>COMMUNITY</li>
        <li>CHART</li>
      </ul>
      <div className={styles.right}>
        <h4>Largest Hbar Community on the Net</h4>
        <div>
          <p>Current HBAR Price: </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
