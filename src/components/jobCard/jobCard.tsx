import jobCardStyles from "./jobCard.module.css";

export default function JobCard() {
  //TODO: define the jobs object
  //TODO: add real styles to component

  return (
    <div className={jobCardStyles.jobCard}>
      <p>Company Name</p>
      <p>Job Title</p>
      <p>Job Post Link</p>
      <p>Date Applied</p>
      <p>Interview</p>
      <p>Interview Date</p>
      <p>Coding Exercise</p>
    </div>
  );
}
