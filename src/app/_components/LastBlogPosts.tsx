import React from "react";
import Image from "next/image";
import blogImage1 from "../../images/blog/homePagePosts.png";
import blogImage2 from "../../images/blog/homePagePosts2.png";
import styles from "../../css/homePage/lastBlogPosts.module.css";

const LastBlogPosts = () => {
  return (
    <div className={styles.postsContainer}>
      <h1 className={styles.title}>Last Blogs Posts</h1>


      <div className={styles.blogssWrapper}>
        <div className={styles.postContainer}>
          <Image
            src={blogImage1}
            alt="Tea and book with candles."
            className={styles.image}
          />

          <div className={styles.textContainer}>
            <h2 className={styles.subTiltle}>How to steep tea like a pro</h2>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. In
              dictum non consectetur a erat nam at. Risus nec feugiat in
              fermentum posuere urna nec tincidunt praesent.
            </p>
            <p className={styles.readMore}>Read More</p>
          </div>
        </div>
        <div className={styles.postContainer}>
          <Image
            src={blogImage2}
            alt="Teapot pouring tea into cup"
            className={styles.image}
          />
          <div className={styles.textContainer}>
            <h2 className={styles.subTiltle}>All about aromas</h2>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. In
              dictum non consectetur a erat nam at. Risus nec feugiat in
              fermentum posuere urna nec tincidunt praesent.
            </p>
            <p className={styles.readMore}>Read More</p>
          </div>
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <button className={styles.button}>BROWSE ALL POSTS</button>
      </div>
    </div>
  );
};

export default LastBlogPosts;
