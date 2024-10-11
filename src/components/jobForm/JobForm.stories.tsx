import type { Meta, StoryObj } from '@storybook/react'

import JobForm from './JobForm'

const meta = {
  title: 'Forms/JobForm',
  component: JobForm,
  args: {}
} satisfies Meta<typeof JobForm>

export default meta
type Story = StoryObj<typeof meta>

export const JobFormStory: Story = {}
