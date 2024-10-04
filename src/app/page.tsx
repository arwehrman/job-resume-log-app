import styles from "./page.module.css";
import JobList from "../components/JobList/JobList";
import JobCard from "../components/JobCard/JobCard";
import JobForm from "../components/JobForm/JobForm";

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
