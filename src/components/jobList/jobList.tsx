import { type ReactNode } from "react";

import JobListStyles from "./jobList.module.css";
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
  items: T[];
  renderItem: (item: T) => ReactNode;
};

export default function JobList<T>({ items, renderItem }: JobListProps<T>) {
  return (
    <div className={JobListStyles.jobList}>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{renderItem(item)}</li>
        ))}
        {/* <li>
          <JobCard companyName="ABC" jobTitle="developer" />
        </li>
        <li>
          <JobCard companyName="DEF" jobTitle="developer" />
        </li>
        <li>
          <JobCard companyName="GHI" jobTitle="Senior Developer" />
        </li> */}
      </ul>
    </div>
  );
}
