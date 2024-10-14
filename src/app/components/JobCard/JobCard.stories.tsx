import type { Meta, StoryObj } from '@storybook/react'

import JobCard from './JobCard'

const meta = {
  title: 'Components/JobCard',
  component: JobCard,
  args: {}
} satisfies Meta<typeof JobCard>

export default meta
type Story = StoryObj<typeof meta>

export const JobCardStory: Story = {
  args: {
    companyName: 'ABC',
    jobTitle: 'developer',
    postLink: 'www.example.com',
    dateApplied: 'date',
    interview: false,
    intervewDate: 'date',
    codingExercise: false,
    rejectionEmail: false,
    referal: false,
    referalName: 'FirstName LastName'
  }
}
