import jobCardStyles from "./jobCard.module.css";

/* 
Job Card will have the following: 
- job details
- edit button
- delete/archive button
- refferal could be another object, like a contact
*/

interface JobProps {
  companyName: string;
  jobTitle: string;
  postLink: string;
  dateApplied: Date;
  interview: boolean;
  intervewDate: Date;
  codingExercise: boolean;
  rejectionEmail: string;
}

export default function JobCard({ companyName, jobTitle }: JobProps) {
  //TODO: define the job object
  //TODO: add real styles to component

  return (
    <div className={jobCardStyles.jobCard}>
      <p>Company Name: {companyName}</p>
      <p>Job Title: {jobTitle}</p>
      <p>Job Post Link</p>
      <p>Date Applied</p>
      <p>Interview</p>
      <p>Interview Date</p>
      <p>Second Interview</p>
      <p>Second Interview Date</p>
      <p>Coding Exercise</p>
      <p>Rejection Email</p>
      <p>Refferal</p>
    </div>
  );
}
