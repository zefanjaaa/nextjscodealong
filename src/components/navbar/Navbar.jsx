"use client";
import styles from "./navbar.module.css";

import Link from "next/link";
import React from "react";
import { links } from "./data.js";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <Link href="/" className={styles.logo}>
        Truly Juicy
      </Link>
      <div className={styles.links}>
        {links.map((link) => {
          return (
            <Link href={link.url} className={styles.link} key={link.id}>
              {link.title}
            </Link>
          );
        })}
        <button
          className={styles.logout}
          onClick={() => {
            console.log("logout");
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
