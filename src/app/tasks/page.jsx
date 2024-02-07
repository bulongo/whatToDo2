"use client";
import TopComponent from "@/components/TopComponent/TopComponent";
import styles from "./page.module.scss";
import { TaskBar, TaskCard } from "@/components/Tasks/Tasks";
import TaskPopUp from "@/components/TaskPopup/TaskPopUp";
import { allTasks } from "@/app/tasks/tasks";
import { useState } from "react";

const tasks = () => {
  const [addTaskState, setAddTaskState] = useState(false);
  const [optionsOpen, setOptionsOpen] = useState(false);

  const newTask = () => {
    if (optionsOpen == true) {
      setOptionsOpen(false);
    } else {
      setOptionsOpen(true);
    }
    console.log(optionsOpen);
  };

  // const openBtn = () => {
  //   if (addTaskState == true) {
  //     setAddTaskState((prev) => !prev);
  //   } else {
  //     setAddTaskState((prev) => !prev);
  //   }
  // };
  //

  const topComponentDetails = {
    title: "Tasks",
    details:
      "This section contains individual tasks that you may want to achieve based on the activities and the general goal.",
    btnsClass: [],
    middleIcons: [],
    leftIcons: [],
    middleIcons: [],
    endItem: [
      <button
        className={styles.addTask}
        onClick={() => newTask()}
        key={"tasksButton"}
      >
        Add New Task
      </button>,
    ],
  };

  return (
    <div className={optionsOpen ? styles.calender : styles.tasks}>
      <TopComponent topComponentDetails={topComponentDetails} />
      <div className={styles.tasksBody}>
        {optionsOpen ? (
          <TaskPopUp items={{ cn: "on", newTask }} />
        ) : (
          <TaskPopUp items={{ cn: "off" }} />
        )}
        <div className={styles.taskCards}>
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
        </div>
        <div className={styles.tasksBottom}>
          <div className={styles.taskHeading}>
            <h3>Tasks for today</h3>
            <div className={styles.taskBars}>
              {allTasks.map((task) => {
                return <TaskBar task={task} key={task.taskHeading} />;
              })}
            </div>
          </div>
          <div className={styles.statistics}>
            <h3>Statistics</h3>
            <div className={styles.stats}>
              <div className={styles.statCards}>
                <StatisticWidget />
                <StatisticWidget />
                <StatisticWidget />
              </div>
              <div className={styles.totalTasksDone}>
                <div className={styles.headings}>
                  <h3>Total tasks: 400</h3>
                  <h4>In 60 days</h4>
                </div>
                <div className={styles.completed}>
                  <StatisticWidget />
                  <StatisticWidget />
                  <StatisticWidget />
                  <StatisticWidget />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {addTaskState && <div>hello world</div>}
    </div>
  );
};

const StatisticWidget = () => {
  return (
    <div className={styles.statWidget}>
      <h4>20 h</h4>
      <p> Tracked time</p>
    </div>
  );
};

export default tasks;
