import Image from "next/image";
import styles from "./Navbar.module.scss";
import logo from "../public/images/clubhbar-logo.svg";



const Navbar = () => {

  // Send GET request to coingecko for HBAR prices HERE

  return (
    <div className={styles.navContainer}>
      {/* 
        Next/Image styling can only be applied using style={{...}} as shown in the example below:
        https://github.com/vercel/next.js/blob/canary/examples/image-component/pages/layout-fill.js
        The exception to this rule are background images
      */}
      <div style={{ position: 'relative', width: '11rem', height: '8rem' }}>
        <Image
          src={logo}
          layout='fill'
          objectFit="cover"
          alt="ClubHbar Logo"
        />
      </div>
      <ul className={styles.navLinks}>
        <li>LEARN</li>
        <li>NEWS</li>
        <li>COMMUNITY</li>
        <li>CHART</li>
      </ul>
      <div className={styles.navPrice}>
        <h4>Largest Hbar Community on the Net</h4>
        <div>
          <p>Current HBAR Price: </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
