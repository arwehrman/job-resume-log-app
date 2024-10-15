import { type ReactNode } from 'react'

import styles from './JobList.module.css'
/* 
Job List will have the following: 
- list of jobs applied for
- a total jobs applied counter
- a total job rejections counter
- a total interviews counter 
*/

//TODO: inject data from jobs into list

// this will eventually come from a data API

type JobListProps<T> = {
  jobStatus: string
  isActive: boolean
  items: T[]
  renderItem: (item: T) => ReactNode
}

// TODO: category will be part of filter logic for the list
// example: rejected (category) would filter the list by all applications marked true for rejected

export default function JobList<T>({
  items,
  renderItem,
  jobStatus,
  isActive
}: JobListProps<T>) {
  const jobListStyles = !isActive
    ? `${styles.jobList} ${styles.rejected}`
    : `${styles.jobList} ${styles.active}`
  return (
    <div className={jobListStyles}>
      <h2 className={styles.jobStatus}>{jobStatus} Applications List:</h2>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{renderItem(item)}</li>
        ))}
      </ul>
    </div>
  )
}
