import jobs from './data.json'

const rejectedJobs = jobs.filter((job) => job.rejectionEmail.includes(true))

console.log(rejectedJobs())
