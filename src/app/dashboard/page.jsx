"use client";

import React from "react";
import styles from "./page.module.css";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useSWR from "swr";

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );
  console.log("this is the session", session);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const title = event.target[0].value;
    const desc = event.target[1].value;
    const img = event.target[2].value;
    const content = event.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      event.target.reset();
      mutate();
    } catch (error) {
      console.log("There is an error creating a post", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
      console.log("Post has been deleted");
    } catch (error) {
      console.log("There is an error deleting a post", error);
    }
  };

  if (session.status === "loading") {
    return <p>loading</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  if (session.status === "authenticated") {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {isLoading
            ? "Loading"
            : data?.map((post) => (
                <div className={styles.post} key={post._id}>
                  <div className={styles.imgContainer}>
                    <Image
                      src={post.img}
                      alt="post-image"
                      width={200}
                      height={100}
                    />
                  </div>
                  <h2 className={styles.postTitle}>{post.title}</h2>
                  <span
                    className={styles.delete}
                    onClick={() => handleDelete(post._id)}
                  >
                    X
                  </span>
                </div>
              ))}
        </div>
        <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Add a new post</h1>
          <input type="text" placeholder="Title" className={styles.input} />
          <input type="text" placeholder="Desc" className={styles.input} />
          <input type="text" placeholder="Image" className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder="Content"
            cols="30"
            rows="10"
          />
          <button className={styles.button}>Send</button>
        </form>
      </div>
    );
  }
};

export default Dashboard;
