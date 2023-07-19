"use client";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import Link from "next/link";
import React from "react";
import { links } from "./data.js";

import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const session = useSession();
  return (
    <nav className={styles.container}>
      <Link href="/" className={styles.logo}>
        Truly Juicy
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => {
          return (
            <Link href={link.url} className={styles.link} key={link.id}>
              {link.title}
            </Link>
          );
        })}
        {session.status === "authenticated" && (
          <button className={styles.logout} onClick={signOut}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
