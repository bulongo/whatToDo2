import TopComponent from "@/components/TopComponent/TopComponent"
import styles from './page.module.scss'
import { participants } from "./data"


const topComponentDetails = {
  title: "Dashboard",
  details: "Construction of standalone branch for the bank of 800 square meters are. Includes client meeting... Projects details",
  btnsClass: [],
  middleIcons:[],
  leftIcons:[],
  middleIcons:[],
  endItem:[]
}

const dashboard = () => {
  return (
    <div>
      <TopComponent topComponentDetails={topComponentDetails} />
      <div className={styles.bottom}>

        <div className={styles.left}>
          <div className={styles.activitiesHeading}>
            <h4>Activities</h4>
            <p>10 recent activities</p>
          </div>
          <div className={styles.activities}>
            <Activity />
            <Activity />
            <Activity />
            <Activity />
            <Activity />
            <Activity />
            <Activity />
            <Activity />
            <Activity />
            <Activity />
            <Activity />
            <Activity />
            <Activity />
             <Activity />
            <Activity />
            <Activity />
            <Activity />
            <Activity />
            <Activity />
            <Activity />
            <Activity />
             <Activity />
            <Activity />
            <Activity />
            <Activity />
            <Activity />
            <Activity />
            <Activity />
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.eventsHeading}>
            <h4>Upcoming Events</h4>
            <p>3 events for today</p>
          </div>
          <div className={styles.events}>
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />

          </div>
        </div>

      </div>
    </div>
  )
}


const Activity = () => {
  return(
    <div className={styles.activity}>
      <div className={styles.activityLeft}>
        <span className={styles.icon}>i</span>
      </div> 
      <div className={styles.activityRight}>
        <div className={styles.activityRight_top}>
          <h5>New Member</h5>
          <span className={styles.timeAgo}>2m</span>
        </div>
        <p>@mikeal.adamson...will be joining us</p>
      </div>
    </div> 
  )
}

const Event = () => {
  return(
    <div className={styles.event}>
      <div className={styles.eventLeft}>
        <div className={styles.time}>11:00 - 11:30 AM</div>
        <h5 className={styles.eventTitle}>Review work place safety</h5>
        <p>Grev Magrigation & Stockholm</p>
      </div>
      <div className={styles.eventRight}>
        profile
      </div>
    </div>
  )
}

export default dashboard
