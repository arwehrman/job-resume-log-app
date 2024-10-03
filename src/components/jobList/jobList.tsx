import JobCard from "../jobCard/jobCard";

/* 
Job List will have the following: 
- list of jobs applied for
- a total jobs applied counter
- a total job rejections counter
- a total interviews counter 
*/

export default function JobList() {
  return (
    <div>
      <JobCard companyName="ABC" jobTitle="developer" />
      <JobCard companyName="DEF" jobTitle="developer" />
      <JobCard companyName="GHI" jobTitle="Senior Developer" />
    </div>
  );
}
