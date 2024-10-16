import jobCardStyles from './JobCard.module.css'

/* 
Job Card will have the following: 
- job details
- edit button
- delete/archive button
- referal could be another object, like a contact
*/

interface JobProps {
  id: number
  companyName: string
  jobTitle: string
  postLink: string
  dateApplied: string
  interview: boolean
  interviewDate: string
  rejectionEmail: boolean
}

export default function JobCard({
  id,
  companyName,
  jobTitle,
  postLink,
  dateApplied,
  interview,
  interviewDate,
  rejectionEmail
}: JobProps) {
  //TODO: add real styles to component
  //TODO: add logic for delete and edit buttons
  //TODO: maybe hide empty fields

  return (
    <div className={jobCardStyles.jobCard}>
      <p>ID REMOVE THIS AFTER TESTING{id}</p>
      <p>Company Name: {companyName}</p>
      <p>Job Title: {jobTitle}</p>
      <p>Job Post Link: {postLink}</p>
      <p>Date Applied: {dateApplied}</p>
      <p>Interview: {interview}</p>
      <p>Interview Date: {interviewDate}</p>
      <p>Rejection Email: {rejectionEmail}</p>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  )
}
