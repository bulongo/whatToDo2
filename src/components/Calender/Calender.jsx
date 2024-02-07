"use client";
// checkmark inside calender when tasks on day are complete
// ah fuck now I have to create a new date item in the details component
// Image if the app could tell the use the expected weather for the day they want to add a task to
import { useState, useEffect } from "react";
import styles from "./calender.module.scss";

// just find the day in the date and then slice it out. Then use that as a comparison to the days and add
// a start to those that are keys

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// make me swipable so we don't rely on arow buttons to move months
// double click on day and it will expand and bring you the task adding menu

const Calender = ({ optionsOpen }) => {
  const [day, setDay] = useState(new Date().getDate());
  const [dayInWeek, setDayInWeek] = useState(new Date().getDay());
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const numberOfDaysinMonth = new Date(year, month + 1, 0).getDate();
  const dateString1 = new Date(year, month, 1);
  const dateString2 = new Date(year, month + 1, 0);
  const dateString3 = new Date(year, month, 0);
  const daysInMonth = [];

  // const {emitterData} = useEmitter()
  // no idea how to make it such that choosing a date will change the day
  //  **FIgured it out
  // console.log(emitterData)

  useEffect(() => {
    // console.log(new Date(`${year}-01-${day}`))
    // This is my ID to figure out how to show if day has tasks or not
    setDayInWeek(new Date(`${year}-${month + 1}-${day}`).getDay());
  }, [day]);

  // const clickDayChanger = () => {
  //     if()
  // }

  const firstDayOfMonth = dateString1.toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  const lastDayOfMonth = dateString2.toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  const lastDayOfPrevMonth = dateString3.toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  const lastOfPrev = lastDayOfPrevMonth.split("/")[1];
  // used to get last day of previous month

  const startPaddingDays = daysOfWeek.indexOf(firstDayOfMonth.split(", ")[0]);
  const endPaddingDays =
    daysOfWeek.length - (daysOfWeek.indexOf(lastDayOfMonth.split(", ")[0]) + 1);

  const daysAtEndOfMonth = new Date(year, month, -startPaddingDays);
  // used to get the days in the padding squares at end of last month

  const daysAtStartPadding = daysAtEndOfMonth.toLocaleDateString("en-us", {
    weekday: "long",
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  // weird bug when dealing with padding days

  // const prevEndPadding = daysAtStartPadding.split("/")[1]
  // console.log(lastDayOfMonth.split("/")[1])

  for (let i = 1; i <= startPaddingDays + numberOfDaysinMonth; i++) {
    if (i > startPaddingDays) {
      daysInMonth.push(i - startPaddingDays);
    } else {
      daysInMonth.push("");
    }
  }

  // for(let i = prevEndPadding;i <=  lastDayOfMonth.split("/")[1];i++){
  // }

  if (daysInMonth[daysInMonth.length - 1] === numberOfDaysinMonth) {
    for (let i = 1; i <= endPaddingDays; i++) {
      daysInMonth.push(
        <div className="padding_day" onClick={(e) => nextMonthDays(e)}>
          {""}
        </div>,
      );
    }
  }

  const openMenu = (e) => {
    if (burgerClass === "inactive_burger") {
      setBurgerClass("active_burger");
    } else {
      setBurgerClass("inactive_burger");
    }
  };

  const nextMonthDays = (e) => {
    // setMonth(month + 1)
    // e.target.classList.remove("day_cell")
  };

  const handleChangeDay = (value) => {
    // Next time leave fucking documentation on how the function works nigga.
    if (value === "lt") {
      setDay(day - 1);
      if (dayInWeek === 0) {
        setDayInWeek(6);
      } else {
        setDayInWeek(dayInWeek - 1);
      }

      if (day <= 1) {
        setDay(Number(lastOfPrev));
        if (month === 0) {
          setMonth(11);
          setYear(year - 1);
        } else {
          setMonth(month - 1);
        }
        // const dayInWeek = (firstDayOfMonth.split(",")[0])
      }
    } else if (value === "gt") {
      if (day >= numberOfDaysinMonth) {
        if (month <= months.length) {
          if (month === 11) {
            setMonth(0);
            setYear(year + 1);
          } else {
            setMonth(month + 1);
            setDayInWeek(dayInWeek + 1);
          }
          setDay(1);
        }
        return;
      }
      if (dayInWeek === 6) {
        setDayInWeek(0);
      } else {
        setDayInWeek(dayInWeek + 1);
      }
      setDay(day + 1);
      // Need to put limit on how high and low dayInWeek can go
      // Done th task
    } else {
      if (value.target.innerText !== "") {
        if (value.detail === 1) {
          setDay(Number(value.target.innerText));
        } else if (value.detail > 1) {
          setDay(Number(value.target.innerText));
          setFormOn(true);
        }
        //  new Audio(sound).play()

        // was using below code to  figure out click to change day name
        // let something = new Date(`${year}-${month + 1}-${day}`)
        // console.log(something.getDay())
        // check  todos for the day
      } else {
        return;
      }
    }
  };

  return (
    <div
      className={optionsOpen ? styles.calenderWithOptionsOpen : styles.calender}
    >
      <main>
        {/* Maybe we should make the today (day) light up */}
        {/* Done with this task */}
        <div className={styles.weekdays}>
          <span>Sun</span>
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
        </div>

        <div className={styles.days}>
          {daysInMonth.map((dim, index) => {
            return (
              <div
                className={day == dim ? styles.selected_cell : styles.day_cell}
                key={index}
                onClick={(e) => handleChangeDay(e)}
              >
                {/* {dataSet ? console.log(dataSet[index]) : console.log("nothing here")} */}
                {dim}
              </div>
            );
          })}
        </div>
      </main>

      {/* I feel like I should put something down here to just not leave the calender not looking pwag*/}
    </div>
  );
};

export default Calender;
