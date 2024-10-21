import type { Meta, StoryObj } from '@storybook/react'

import Job from './Job'

const meta = {
  title: 'Components/Job',
  component: Job,
  args: {}
} satisfies Meta<typeof Job>

export default meta
type Story = StoryObj<typeof meta>

export const JobStory: Story = {
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
