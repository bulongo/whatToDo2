"use client"
import { useState,useEffect } from "react"
import TopComponent from "@/components/TopComponent/TopComponent"
import styles from "./page.module.scss"
import Calender from "@/components/Calender/Calender"
import { MdOutlineExpandLess } from "react-icons/md";
import { CiCalendar,CiMenuKebab } from "react-icons/ci";
import AddButtonPopUp from "@/components/AddButtonPopup/AddButtonPopUp"



const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const page = () => {
  const [month,setMonth] = useState(new Date().getMonth())
  const [monthNum,setMonthNum] = useState(month)
  const [year,setYear] = useState(new Date().getFullYear())
  const [optionsOpen,setOptionsOpen] = useState(false)

  const incMonth = (e) => {
    console.log('increment pressed')
    if(monthNum >= 0 && monthNum < 11){
      setMonthNum(monthNum + 1)
    } else if(monthNum == 11){
      setMonthNum(0)
      setYear(year + 1)
    }
  }

  const decMonth = (e) => {
    console.log('increment pressed')
    if(monthNum <= 11 && monthNum > 0){
      setMonthNum(monthNum - 1)
    } else if(monthNum == 0){
      setMonthNum(11)
      setYear(year - 1)
    }
  }

  const monthName = months[monthNum].split("")
  const newName = []
  monthName.forEach((monthNameItem,index) => {
    if(index <= 2){
      newName.push(monthNameItem)
    }
  })

  const openBtn = () => {
    if(optionsOpen == true){
      setOptionsOpen(false)
    } else {
      setOptionsOpen(true)
    }
  }

  const getQuotes = async () => {
    const url = 'https://andruxnet-random-famous-quotes.p.rapidapi.com/?count=10&cat=famous';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '3501115c47msha5fbafd51371fc3p13e5b1jsnb9279070083b',
        'X-RapidAPI-Host': 'andruxnet-random-famous-quotes.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }


  const topComponentDetails = {
    title: `${newName.join("")} ${year}`,
    details: "Here are all your planned events. You will find information for each event as well as the new ones you can plan.",
    btnsClass: [styles.btns],
    middleClass: [styles.middle],
    leftIcons:[<MdOutlineExpandLess className={styles.left} onClick={(e) => decMonth(e)}/>,
      <span className={styles.circle}></span>,
      <MdOutlineExpandLess className={styles.right} onClick={(e) => incMonth(e)}/>],
    middleIcons:[<CiCalendar/>, <CiMenuKebab/>],
    endItem:[<button className={styles.addEvent} onClick={() => openBtn()}>Add Event</button>],
  }


  return (
    <div className={styles.homePage}>
      <TopComponent topComponentDetails={topComponentDetails} />
      {optionsOpen ? <AddButtonPopUp items={{cn:"on"}}/> :
        <AddButtonPopUp items={{cn:"off"}}/> }
      <Calender optionsOpen={optionsOpen} />
    </div>
  )
}

export default page
