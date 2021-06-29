import Image from "next/image";
import styles from "./Navbar.module.scss";
import logo from "../public/images/clubhbar-logo.svg";

// Send GET request to coingecko for HBAR prices in future

const Navbar = () => {
  return (
    <div className={styles['nav-container']}>
      <div style={{ position: 'relative', width: '11rem', height: '8rem' }}>
        <Image
          src={logo}
          layout='fill'
          objectFit="cover"
          alt="ClubHbar Logo"
        />
      </div>
      <ul className={styles['nav-links']}>
        <li>LEARN</li>
        <li>NEWS</li>
        <li>COMMUNITY</li>
        <li>CHART</li>
      </ul>
      <div className={styles['nav-price']}>
        <h4>Largest Hbar Community on the Net</h4>
        <div>
          <p>Current HBAR Price: </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
