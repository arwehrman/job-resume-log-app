import Input from './Input'
import { type FormEvent } from 'react'
import styles from './JobForm.module.css'
//TODO: create handler function for form submit
//TODO: add styles to form and inputs
//REFACTOR: make button as a reusable component
//REFACTOR: make inputs into an object that is mapped into inputs
//NOTE: this should or could probably be a page, hiding the form unless adding

export default function JobForm() {
  function handleSubmit(event: FormEvent<HTMLElement>) {
    event.preventDefault()
  }

  return (
    <form className={styles.jobForm}>
      <h2>Add a job</h2>
      <div>
        <Input label="Company Name" inputType="text" inputName="companyName" />
        <Input label="Job Title" inputType="url" inputName="jobTitle" />
        <Input label="Job Post Link" inputType="text" inputName="jobPostLink" />
        <Input label="Interview" inputType="checkbox" inputName="interview" />
        <Input
          label="Interview Date"
          inputType="date"
          inputName="interviewDate"
        />
        <Input
          label="Second Interview"
          inputType="checkbox"
          inputName="secondInterview"
        />
        <Input
          label="Second Interview Date"
          inputType="date"
          inputName="secondInterviewDate"
        />
        <Input
          label="Coding Exercise Submitted"
          inputType="checkbox"
          inputName="codingExercise"
        />
        <Input
          label="Rejection Email Recieved"
          inputType="checkbox"
          inputName="rejectionEmail"
        />
      </div>
      <button type="submit">Add Job</button>
    </form>
  )
}
