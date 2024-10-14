import styles from './page.module.css'
import JobList from '../components/JobList/JobList'
import JobCard from '../components/JobCard/JobCard'
import JobForm from '../components/JobForm/JobForm'
import JobStatistics from '../components/JobStatistics/JobStats'
import jobs from './data.json'

//TODO: Connect to a data API instead of dummy data json feed

// dummy data for stats will move API with rest of the data
const stats = {
  jobsApplied: 43,
  totalActiveApplications: 33,
  totalRejections: 10,
  totalInterviews: 3,
  totalCodingExercises: 2,
  averageJobsPerDay: 4,
  daysUnemployed: 24
}

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>
          <h1>Job Resume Log</h1>
          <section>
            <JobList items={jobs} renderItem={JobCard} category="rejected" />
          </section>
          <section>
            <JobList items={jobs} renderItem={JobCard} category="active" />
          </section>
          <section>
            <JobForm />
          </section>
          <aside>
            <JobStatistics {...stats} />
          </aside>
        </div>
      </main>
    </div>
  )
}
