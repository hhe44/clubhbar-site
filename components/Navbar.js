import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.scss";
import logo from "../public/images/clubhbar-logo.svg";

const COINGECKO_HBAR_PRICE_API = "https://api.coingecko.com/api/v3/simple/price?ids=hedera-hashgraph&vs_currencies=usd";

const Navbar = ({ isHomePage = false }) => {

  const [price, setPrice] = useState({ hbarPrice: 0 });
  const fetchPrice = async () => {
    const res = await fetch(`${COINGECKO_HBAR_PRICE_API}`);
    const data = await res.json();
    setPrice({ hbarPrice: data["hedera-hashgraph"].usd });
  };
  useEffect(() => { fetchPrice() }, []);
  const { hbarPrice } = price;

  return (
    <div className={styles.navContainer}>
      {/* 
        Next/Image styling can only be applied using style={{...}} as shown in the example below:
        https://github.com/vercel/next.js/blob/canary/examples/image-component/pages/layout-fill.js
        The exception to this rule are background images
      */}
      <div style={{ position: "relative", width: "11rem", height: "8rem" }}>
        {!isHomePage && (
          <Image
            src={logo}
            layout="fill"
            objectFit="cover"
            alt="ClubHbar Logo"
          />
        )}
      </div>
      <div className={styles.navLinks}>
        <Link href="/">
          <a>HOME</a>
        </Link>
        <Link href="/learn">
          <a>LEARN</a>
        </Link>
        <Link href="/news">
          <a>NEWS</a>
        </Link>
        <Link href="/community">
          <a>COMMUNITY</a>
        </Link>
        <Link href="/charts">
          <a>CHARTS</a>
        </Link>
      </div>
      <div className={styles.navPrice}>
        <h4>{!isHomePage ? "Largest HBAR Community on the Net" : ""}</h4>
        <div>
          <p>{`Current HBAR Price: ${hbarPrice}`}</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
