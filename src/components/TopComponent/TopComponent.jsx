"use client"
import styles from "./topComponent.module.scss";


const TopComponent = ({topComponentDetails}) => {
  const {title,details,btnsClass,middleClass,leftIcons,middleIcons,endItem} = topComponentDetails

  const firstLeftIcon = leftIcons[0]
  const secondLeftIcon = leftIcons[1]
  const thirdLeftIcon = leftIcons[2]

  const firstMiddleIcon = middleIcons[0]
  const secondMiddleIcon = middleIcons[1]
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
        <p className={styles.info}>
         {details} 
        </p>
      </div>

    </div>
  );
};

export default TopComponent;
