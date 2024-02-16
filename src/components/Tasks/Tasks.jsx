"use client";
import { useRef, useState } from "react";
import styles from "./tasks.module.scss";

export const TaskCard = () => {
  return (
    <div className={styles.taskCard}>
      in progress tasks will show up here
      <h3>Task heading</h3>
      <p>Web Development</p>
      <div>
        <p>10 tasks</p>
        <p>96%</p>
      </div>
      <p>Progress bar</p>
    </div>
  );
};

// had to put this bastard out here coz he keeps being refreshed in the reload
let counter = 0;

export const TaskBar = ({ task }) => {
  let {
    taskHeading,
    taskItem,
    dateCreated,
    inProgress,
    completeState,
    selectedState,
  } = task;
  // to remember which tasks were selected even when we move to another page
  const ref = useRef(0);
  const [taskSelected, setTaskSelected] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [menuState, setMenuState] = useState(false);
  // console.log(task.task)

  const handleSelect = () => {
    // when this is clicked we should bring up a menu to show options of what you can do to the tasks
    // console.log(ref.current)
    if (taskSelected == false) {
      setTaskSelected((prev) => {
        return !prev;
      });
      selectedState = true;
      counter += 1;
      if (counter > 1) {
        setMenuState(true);
      }
    } else {
      setTaskSelected((prev) => {
        return !prev;
      });
      counter -= 1;
      if (counter <= 1) {
        setMenuState(false);
        console.log("yeah we have hit zero");
      }
    }
  };

  const edit = (e) => {
    console.log(e.target.innerText);
    setEditMode((prev) => {
      return !prev;
    });
  };

  const remove = (e) => {
    alert("Are you sure you want to delete?");
    console.log(e.target.innerText);
  };

  const complete = (e) => {
    alert("well done my young padiwan");
    console.log(e.target.innerText);
  };

  return (
    <div
      className={taskSelected ? styles.taskBarSelected : styles.taskBar}
      onClick={(e) => handleSelect(e)}
    >
      <div className={styles.topText}>
        <h3>{taskHeading}</h3>
        <p>{taskItem}</p>
      </div>
      <span
        className={taskSelected ? styles.selected : styles.unSelected}
      ></span>
      <div className={styles.options}>
        <span onClick={(e) => edit(e)}>Edit</span>
        <span onClick={(e) => remove(e)}>Delete</span>
        <span onClick={(e) => complete(e)}>Complete</span>
      </div>
    </div>
  );
};
