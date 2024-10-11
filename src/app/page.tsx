import styles from './page.module.css'
import JobList from '../components/JobList/JobList'
import JobCard from '../components/JobCard/JobCard'
import JobForm from '../components/JobForm/JobForm'
import jobs from './data.json'

//TODO: Connect to a data API instead of dummy data json feed

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
  )
}
