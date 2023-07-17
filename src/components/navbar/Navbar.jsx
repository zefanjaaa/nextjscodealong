"use client";
import styles from "./navbar.module.css";

import Link from "next/link";
import React from "react";
const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

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
