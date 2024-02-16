"use client";
import styles from "./page.module.scss";
import { useState } from "react";
const profile = () => {
  const [name, setName] = useState(null);
  const sayJay = () => {
    console.log("Hi there Jay");
  };
  return (
    <div className={styles.profile}>
      <div className={styles.top}>
        <h1>Hello Mr.Mukkuli</h1>
        <p>We are happy to introduce you to the all new WhatToDo</p>
        <span className={styles.picture}></span>
      </div>
      <div className={styles.middle}>
        <h2>Something new here</h2>
      </div>
      <div>
        <h3>DO you konw what that is</h3>
        <p>We are tryin this thing out</p>
        <button id="btn" onClick={() => sayJay()}>
          Click me
        </button>
      </div>
    </div>
  );
};

export default profile;
