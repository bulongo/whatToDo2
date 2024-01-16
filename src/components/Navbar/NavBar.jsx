import styles from "./navbar.module.scss"
import Link from "next/link"
import { PiStackLight,PiClockLight } from "react-icons/pi"
// import { FcTodoList } from "react-icons/fc"
import { CiCalendar,CiMenuKebab,CiStickyNote,CiCircleList } from "react-icons/ci"

import NavLink from "./NavLink/NavLink"


const NavBar = () => {

  const links = [
    {
      title: "homepage",
      path: "/",
      icon: <CiCalendar className={styles.icon}/>
    },{
      title: "tasks",
      path: "/tasks",
      icon: <CiCircleList className={styles.icon} />
    },{
      title: "documents",
      path: "/documents",
      icon: <CiStickyNote className={styles.icon} />
    },{
      title: "dashboard",
      path: "/dashboard",
      icon: <PiClockLight className={styles.icon}/>
    },
  ]

  return (
    <div className={styles.NavBar}>
      <Link href="/profile" className={styles.profile}>
        <div className={styles.bottom}>
          <span className={styles.notifications}>7</span>
        </div>
      </Link>

      <div className={styles.middle}>
        <NavLink links={links}/>
      </div>

      <div className={styles.top}>
        <PiStackLight className={styles.stack}/>
        <CiMenuKebab />
      </div>
    </div>
  )
}

export default NavBar
