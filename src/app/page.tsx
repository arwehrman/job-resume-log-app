'use client'
import styles from './page.module.css'
import JobList from './components/JobList/JobList'
import JobCard from './components/JobCard/JobCard'
import JobForm from './components/JobForm/JobForm'
import JobStatistics from './components/JobStatistics/JobStats'
import Header from './components/Header/Header'
import { useState } from 'react'

//TODO: Connect to a data API instead of dummy data json feed
//TODO: Solidfy CSS/SASS into coherent patterns

export type JobCard = {
  id: number
  companyName: string
  jobTitle: string
  postLink: string
  dateApplied: string
  interview: boolean
  interviewDate: string
  rejectionEmail: boolean
}

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
  const [jobs, setJobs] = useState<JobCard[]>([])

  function handleAddJob(
    id: number,
    companyName: string,
    jobTitle: string,
    postLink: string,
    dateApplied: string,
    interview: boolean,
    interviewDate: string,
    rejectionEmail: boolean
  ) {
    setJobs((prevJobs) => {
      const newJob: JobCard = {
        id: Math.random(),
        companyName: companyName,
        jobTitle: jobTitle,
        postLink: postLink,
        dateApplied: dateApplied,
        interview: interview,
        interviewDate: interviewDate,
        rejectionEmail: rejectionEmail
      }
      return [...prevJobs, newJob]
    })
  }

  //REFACTOR: need to use
  let rejectedJobs = jobs.filter((job) => {
    return job.rejectionEmail
  })

  let activeJobs = jobs.filter((job) => {
    return !job.rejectionEmail
  })

  return (
    <div className={styles.page}>
      <Header title="Mandy's Job Log" />
      <main className={styles.main}>
        <section>
          <JobList
            items={activeJobs}
            renderItem={JobCard}
            isActive={true}
            jobStatus="active"
          />
          <JobList
            items={rejectedJobs}
            renderItem={JobCard}
            isActive={false}
            jobStatus="rejected"
          />
        </section>
        <aside>
          <JobStatistics {...stats} />
        </aside>
        <section>
          <JobForm onAddJob={handleAddJob} />
        </section>
      </main>
    </div>
  )
}
