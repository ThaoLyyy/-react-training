import React from 'react'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    handleClick: { action: 'clicked' },
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' }
  }
}

const Template = args => <Button {...args} />
export const Default = Template.bind({})
Default.args = {
  label: 'Default',
  backgroundColor: '#ffffff',
  textColor: '#78e2f3'
}

export const Edit = Template.bind({})
Edit.args = {
  label: 'Edit',
  backgroundColor: '#efc83f',
  textColor: '#000'
}

export const Delete = Template.bind({})
Delete.args = {
  label: 'Delete',
  backgroundColor: '#f23636',
  textColor: '#000'
}
