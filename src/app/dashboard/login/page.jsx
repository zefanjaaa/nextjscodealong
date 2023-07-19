"use client";
import React from "react";
import styles from "./page.module.css";
import { getProviders, useSession, signIn } from "next-auth/react";
import Link from "next/link";

const Login = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;
    signIn("credentials", {
      email,
      password,
    });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Email"
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className={styles.input}
        />
        <button className={styles.button}>Login</button>
      </form>
      <button
        onClick={() => {
          signIn("google");
        }}
      >
        Login with Google
      </button>

      <Link href="/dashboard/register">Register a new account</Link>
    </div>
  );
};

export default Login;
