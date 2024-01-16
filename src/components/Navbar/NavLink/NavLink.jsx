"use client"
import Link from 'next/link'
import styles from "./navLink.module.scss"
import { usePathname } from 'next/navigation'
import { useState } from 'react'
 
const NavLink = ({links}) => {
  const [titleState,setTitleState] = useState(false)
  const pathName = usePathname()

  const showName = () => {
    if(titleState){
      setTitleState((prev) => {return !prev})
    } else {
       setTitleState((prev) => {return !prev})
    }
  }


          // {titleState && <span>{link.title}</span>}
  return (
    <div className={styles.middle}>
      {links.map((link) => {
        return(
          <Link href={link.path} className={`${styles.icon} ${pathName === link.path && styles.active}`} 
          onMouseEnter={() => showName()} key={link.title}>
            {link.icon}
          </Link>
        )
      })}
    </div>
  )
}

export default NavLink
