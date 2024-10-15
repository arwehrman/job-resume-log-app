import type { Meta, StoryObj } from '@storybook/react'

import JobStats from './JobStats'

const meta = {
  title: 'Components/JobStats',
  component: JobStats,
  args: {}
} satisfies Meta<typeof JobStats>

export default meta
type Story = StoryObj<typeof meta>

// TODO: this data should come from calculations of the actual data
export const JobStatsStory: Story = {
  args: {
    jobsApplied: 43,
    totalActiveApplications: 33,
    totalRejections: 10,
    totalInterviews: 3,
    totalCodingExercises: 2,
    averageJobsPerDay: 4,
    daysUnemployed: 24
  }
}
