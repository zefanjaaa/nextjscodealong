"use client";

import React from "react";
import styles from "./page.module.css";

const Register = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input type="text" placeholder="username" className={styles.input} />
        <input type="email" placeholder="email" className={styles.input} />
        <input
          type="password"
          placeholder="password"
          className={styles.input}
        />
      </form>
    </div>
  );
};

export default Register;
