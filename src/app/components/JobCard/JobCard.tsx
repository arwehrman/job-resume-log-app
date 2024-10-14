import jobCardStyles from './JobCard.module.scss'

/* 
Job Card will have the following: 
- job details
- edit button
- delete/archive button
- referal could be another object, like a contact
*/

interface JobProps {
  companyName: string
  jobTitle: string
  postLink: string
  dateApplied: string
  interview: boolean
  intervewDate: string
  codingExercise: boolean
  rejectionEmail: boolean
  referal: boolean
  referalName: string
}

export default function JobCard({
  companyName,
  jobTitle,
  postLink,
  dateApplied,
  interview,
  intervewDate,
  codingExercise,
  rejectionEmail,
  referal,
  referalName
}: JobProps) {
  //TODO: add real styles to component
  //TODO: add logic for delete and edit buttons
  //TODO: maybe hide empty fields

  return (
    <div className={jobCardStyles.jobCard}>
      <p>Company Name: {companyName}</p>
      <p>Job Title: {jobTitle}</p>
      <p>Job Post Link: {postLink}</p>
      <p>Date Applied: {dateApplied}</p>
      <p>Interview: {interview}</p>
      <p>Interview Date: {intervewDate}</p>
      <p>Second Interview</p>
      <p>Second Interview Date</p>
      <p>Coding Exercise: {codingExercise}</p>
      <p>Rejection Email: {rejectionEmail ? 'Yes' : ''}</p>
      <p>referal: {referal}</p>
      <p>Referal Name: {referalName}</p>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  )
}
