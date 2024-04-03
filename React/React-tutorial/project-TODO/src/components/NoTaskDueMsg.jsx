import React from 'react'
import styles from './NoTaskDueMsg.module.css'
const NoTaskDueMsg = ({ todoItems }) => {
  return (
    todoItems.length === 0 &&
    <>
      <h3 className={styles.noTaskDue}>No Task Due </h3>
      <h4 className={styles.description}>Enjoy!!</h4>
    </>
  )
}

export default NoTaskDueMsg
