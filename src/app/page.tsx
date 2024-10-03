import styles from "./page.module.css";
import JobList from "../components/jobList/jobList";
import JobForm from "../components/jobForm/jobForm";

//TODO: Connect to a data source instead of hard coding jobs data

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>
          <h1>Job Resume Log</h1>
          <JobList />
          <JobForm />
        </div>
      </main>
    </div>
  );
}
