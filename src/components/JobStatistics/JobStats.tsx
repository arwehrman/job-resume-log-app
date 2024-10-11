import jobStatisticsStyles from './JobStats.module.css'

type JobStatProps = {
  jobsApplied: number
  totalActiveApplications: number
  totalRejections: number
  totalInterviews: number
  totalCodingExercises: number
  averageJobsPerDay: number
  daysUnemployed: number
}

export default function JobStatistics({
  jobsApplied,
  totalActiveApplications,
  totalRejections,
  totalInterviews,
  totalCodingExercises,
  averageJobsPerDay,
  daysUnemployed
}: JobStatProps) {
  return (
    <div className={jobStatisticsStyles.jobStats}>
      <h2>Job Search Stats</h2>
      <p>Total Jobs Applied: {jobsApplied}</p>
      <p>Total Active Applications: {totalActiveApplications}</p>
      <p>Total Application Rejections: {totalRejections}</p>
      <p>Total Interviews Completed: {totalInterviews}</p>
      <p>Total Coding Exercises Completed: {totalCodingExercises}</p>
      <p>Average Jobs Applied to per day: {averageJobsPerDay}</p>
      <p>Number of Days Unemployed: {daysUnemployed}</p>
    </div>
  )
}
