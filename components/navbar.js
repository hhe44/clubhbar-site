import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./navbar.module.scss";
import logo from "../public/images/clubhbar-logo.svg";

const Navbar = ({ isHomePage = false, isChartPage = false }) => {
  const [price, setPrice] = useState({ hbarPrice: 0 });
  const fetchPrice = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_COINGECKO_URL}/simple/price?ids=hedera-hashgraph&vs_currencies=usd`
    );
    const data = await res.json();
    setPrice({ hbarPrice: data["hedera-hashgraph"].usd });
  };
  useEffect(() => {
    fetchPrice();
  }, []);
  const { hbarPrice } = price;

  return (
    <div
      className={`${styles.container} ${!isHomePage ? "" : styles.hideLogo}`}
    >
      {/* 
        Next/Image styling can only be applied using style={{...}} as shown in the example below:
        https://github.com/vercel/next.js/blob/canary/examples/image-component/pages/layout-fill.js
        The exception to this rule are background images
      */}
      <Link href="/" passHref>
        <div style={{ position: "relative", width: "11rem", height: "7rem" }}>
          <Image
            src={logo}
            layout="fill"
            objectFit="cover"
            alt="ClubHbar Logo"
            quality={50}
          />
        </div>
      </Link>
      <div className={styles.links}>
        <Link href="/">HOME</Link>
        <Link href="/learn">LEARN</Link>
        <Link href="/news">NEWS</Link>
        {/* <Link href="/community">COMMUNITY</Link> */}
        <Link href="/charts">CHARTS</Link>
      </div>
      <div className={styles.price}>
        <h4>{!isHomePage ? "Largest HBAR Community on the Net" : ""}</h4>
        {!isChartPage && (
          <div>
            <p>{`Current HBAR Price: $${hbarPrice}`}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
