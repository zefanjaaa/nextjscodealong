import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div>2023© Made with love by Zefanja</div>
      <div className={styles.social}>
        <Image
          src="/1.png"
          alt="footer-logo-facebook"
          width={15}
          height={15}
          className={styles.icon}
        />
        <Image
          src="/2.png"
          alt="footer-logo-instagram"
          width={15}
          height={15}
          className={styles.icon}
        />
        <Image
          src="/3.png"
          alt="footer-logo-twitter"
          width={15}
          height={15}
          className={styles.icon}
        />
        <Image
          src="/4.png"
          alt="footer-logo-youtube"
          width={15}
          height={15}
          className={styles.icon}
        />
      </div>
    </footer>
  );
};

export default Footer;
