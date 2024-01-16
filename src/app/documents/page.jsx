import TopComponent from "@/components/TopComponent/TopComponent"
import styles from "./page.module.scss"
import { CiSearch } from "react-icons/ci";


const topComponentDetails = {
  title: "Documents",
  details: "All documents relating to the project are stored here. You will find updated documents or create new ones.",
  btnsClass: [],
  middleClass:[styles.middle],
  leftIcons:[],
  middleIcons:[<CiSearch className={styles.icon}/>,<input type="text" className={styles.input}/>],
  endItem:[<button className={styles.btn}>Create Document</button>]
}

const documents = () => {
  return (
    <div className={styles.documents}>
      <TopComponent topComponentDetails={topComponentDetails} />
      <div className={styles.documentsBody}>
        <div className={styles.headings}>
          <h4>NAME</h4>
          <div>
            <h4>OWNER</h4>
            <h6>Sort by A - Z</h6>
          </div>
          <h4>UPDATED</h4>
          <h4>TAGS</h4>
          <h4>SIZE</h4>
          <span>m</span>
        </div>
        <div className={styles.lowerBody}>
          <Document />
          <Document />
          <Document />
          <Document />
          <Document />
          <Document />
          <Document />
          <Document />
          <Document />
          <Document />
          <Document />
          <Document />
          <Document />
          <Document />
          <Document />
          <Document />
          <Document />
          <Document />
          <Document />
          <Document />
          <Document />
          <Document />
          <Document />
          <Document />
          <Document />
          <Document />
          <Document />
          <Document />
          <Document />
        </div>
      </div>
    </div>
  )
}


const Document = () => {
  return(
    <div className={styles.document}>
      <div>
      <icon>icon</icon>
        <h4>Meeting notes</h4>
        <p>7 items</p>
      </div>
      <p>You</p>
      <p>2d ago by Olivia Sydenberg</p>
      <p>--</p>
      <div>7.0MB</div>
      <span>m</span>
    </div>
  )
}

export default documents
