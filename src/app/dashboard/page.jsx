"use client";

import React from "react";
// import styles from "./page.module.css";
import { useSession } from "next-auth/react";

// import { useRouter } from "next/navigation";
// import useSWR from "swr";

const Dashboard = () => {
  const session = useSession();
  // const router = useRouter();
  console.log("this is the session", session);
  // const fetcher = (...args) => fetch(...args).then((res) => res.json());
  return <div>Dashboard</div>;
};

export default Dashboard;
