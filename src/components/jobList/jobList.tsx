import { type ReactNode } from 'react'

import JobListStyles from './jobList.module.css'
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
  category: string
  items: T[]
  renderItem: (item: T) => ReactNode
}

// TODO: category will be part of filter logic for the list
// example: rejected (category) would filter the list by all applications marked rejected

export default function JobList<T>({
  items,
  renderItem,
  category
}: JobListProps<T>) {
  return (
    <div className={JobListStyles.jobList}>
      <h2>{category} Applications List: </h2>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{renderItem(item)}</li>
        ))}
      </ul>
    </div>
  )
}
