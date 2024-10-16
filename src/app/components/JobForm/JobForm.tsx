'use client'
import { type FormEvent, useRef } from 'react'
import styles from './JobForm.module.css'

//TODO: create handler function for form submit
//TODO: add styles to form and inputs
//TODO: make input a reusable component
//NOTE: this should or could probably be a page, hiding the form unless adding

type NewJobProps = {
  onAddJob: (
    id: number,
    companyName: string,
    jobTitle: string,
    postLink: string,
    dateApplied: string,
    interview: boolean,
    intervewDate: string,
    rejectionEmail: boolean
  ) => void
}
export default function JobForm({ onAddJob }: NewJobProps) {
  const companyName = useRef<HTMLInputElement>(null)
  const jobTitle = useRef<HTMLInputElement>(null)
  const postLink = useRef<HTMLInputElement>(null)
  const dateApplied = useRef<HTMLInputElement>(null)
  const interview = useRef<HTMLInputElement>(null)
  const interviewDate = useRef<HTMLInputElement>(null)
  const rejectionEmail = useRef<HTMLInputElement>(null)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault() // prevent to http request to browser for now
    const enteredCompanyName = companyName.current!.value
    const enteredJobTitle = jobTitle.current!.value
    const enteredJobLink = postLink.current!.value
    const enteredDateApplied = dateApplied.current!.value
    const enteredInterview = interview.current!.value
    const enteredInterviewDate = interviewDate.current!.value
    const enteredRejectionEmail = rejectionEmail.current!.value

    // reset the form
    event.currentTarget.reset()
    onAddJob(
      enteredCompanyName,
      enteredJobTitle,
      enteredJobLink,
      enteredDateApplied,
      enteredInterview,
      enteredInterviewDate,
      enteredRejectionEmail
    )
  }

  return (
    <form className={styles.jobForm} onSubmit={handleSubmit}>
      <p>
        <label htmlFor="companyName">Company Name</label>
        <input id="companyName" type="text" ref={companyName} />
      </p>
      <p>
        <label htmlFor="jobTitle">Job Title</label>
        <input id="jobTitle" type="text" ref={jobTitle} />
      </p>
      <p>
        <label htmlFor="postLink">Job Post Link</label>
        <input id="postLink" type="text" ref={postLink} />
      </p>
      <p>
        <label htmlFor="dateApplied">Date Applied</label>
        <input id="dateApplied" type="text" ref={dateApplied} />
      </p>
      <p>
        <label htmlFor="interview">Interview</label>
        <input id="interview" type="checkbox" ref={interview} />
      </p>
      <p>
        <label htmlFor="interviewDate">Interview Date</label>
        <input id="interviewDate" type="text" ref={interviewDate} />
      </p>
      <p>
        <label htmlFor="rejectionEmail">Rejection Email</label>
        <input id="rejectionEmail" type="checkbox" ref={rejectionEmail} />
      </p>
      <button>Add Job</button>
    </form>
  )
}
