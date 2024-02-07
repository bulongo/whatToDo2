"use client";
import { useState } from "react";
import styles from "./eventPopup.module.scss";

const EventPopUp = ({ items }) => {
  const [day, setDay] = useState(new Date().toString().split(" ")[0]);
  const [date, setDate] = useState(new Date().toString().split(" ")[2]);
  const [month, setMonth] = useState(new Date().toString().split(" ")[1]);
  const [year, setYear] = useState(new Date().toString().split(" ")[3]);

  const dateCreated = `${day} ${date} ${month} ${year}`;

  const openBtn = items.openBtn;

  const createTask = () => {
    console.log("hello there, I am the task master");
  };

  if (items.cn == "on") {
    return (
      <div className={styles.addButtonOn}>
        <div className={styles.formOn}>
          <canvas width={845} height={905} className={styles.canvas1} />
          <p>
            Created: <span className={styles.dateCreated}>{dateCreated}</span>
          </p>
          <input type="text" placeholder="Attendees" className={styles.input} />
          <input
            type="text"
            placeholder="Event Heading"
            className={styles.input}
          />
          <input type="text" placeholder="Event" className={styles.input} />
          <input type="text" placeholder="Category" className={styles.input} />
          <input
            type="text"
            placeholder="Event Date"
            className={styles.input}
          />
          <button className={styles.addBtn} onClick={() => createTask()}>
            Create Event
          </button>
          <span className={styles.closeMenu} onClick={() => openBtn()}>
            X
          </span>
        </div>
      </div>
    );
  } else if (items.cn == "off") {
    return (
      <div className={styles.addButtonOff}>
        <div className={styles.formOff}>
          <p>
            Created: <span className={styles.dateCreated}>{dateCreated}</span>
          </p>
          <input type="text" placeholder="attendees" className={styles.input} />
          <input
            type="text"
            placeholder="Event Heading"
            className={styles.input}
          />
          <input type="text" placeholder="Event" className={styles.input} />
          <input type="text" placeholder="category" className={styles.input} />
          <input type="text" placeholder="Date" className={styles.input} />
          <button className={styles.addBtn}>Create Event</button>
        </div>
      </div>
    );
  }
};

export default EventPopUp;
