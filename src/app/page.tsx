import styles from "./page.module.css";
import JobList from "../components/jobList/jobList";
import JobCard from "../components/jobCard/jobCard";
import JobForm from "../components/jobForm/jobForm";

//TODO: Connect to a data API instead of hard coding here
const jobs = [
  { companyName: "ABC", jobTitle: "developer" },
  { companyName: "EFG", jobTitle: "Front End Developer II" },
  { companyName: "GHI", jobTitle: "Senior Developer" },
  { companyName: "ZZZ", jobTitle: "Tech Lead" },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>
          <h1>Job Resume Log</h1>
          <JobList items={jobs} renderItem={JobCard} />
          <JobForm />
        </div>
      </main>
    </div>
  );
}
