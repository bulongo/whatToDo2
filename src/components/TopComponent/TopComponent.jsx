"use client";
import styles from "./topComponent.module.scss";
import dadJokes from "@/app/lib/quotes";
import { useEffect, useRef, useState } from "react";

const TopComponent = ({ topComponentDetails }) => {
  const [isClient, setIsclient] = useState(false);
  const jokeNumber = Math.floor(Math.random() * (dadJokes.length * 1));
  let jokeOfTheDay = dadJokes[jokeNumber];
  const joke = jokeOfTheDay.joke;
  // i need this to be dynamic
  // but I only need it to change after a reload
  // what i can do is capture all the info  of where the person was the last time they were on
  // the page and then reload those exact settings or whatever till they
  // explicity change them.
  // Or i could make the quotes go by day and not by screen load.
  // console.log(jokeNumber);

  const {
    title,
    details,
    btnsClass,
    middleClass,
    leftIcons,
    middleIcons,
    endItem,
  } = topComponentDetails;

  // just put here to get details so it can only show this on the home page and no where else
  useEffect(() => {
    if (details === "loading...") {
      setIsclient(true);
    }
  }, []);

  const firstLeftIcon = leftIcons[0];
  const secondLeftIcon = leftIcons[1];
  const thirdLeftIcon = leftIcons[2];

  const firstMiddleIcon = middleIcons[0];
  const secondMiddleIcon = middleIcons[1];
  // change menu from 3 dots into two, code the icons yourself
  return (
    <div className={styles.topComponent} key={title}>
      <div className={styles.upper}>
        <div className={styles.upperLeft}>
          <h2>{title}</h2>
          <div className={btnsClass}>
            {firstLeftIcon}
            {secondLeftIcon}
            {thirdLeftIcon}
          </div>

          <div className={middleClass}>
            {firstMiddleIcon}
            {secondMiddleIcon}
          </div>
        </div>

        {endItem}
      </div>

      <div className={styles.lower}>
        <p className={styles.info}>{isClient ? joke : details}</p>
      </div>
    </div>
  );
};

export default TopComponent;
