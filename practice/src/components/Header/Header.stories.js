import React from 'react'
import Header from '.'

export default {
  title: 'Components/Header',
  Component: Header,
  args: {
    size: { control: 'large' },
  }
}

const Template = args => <Header {...args} />
export const Default = Template.bind({})
Default.args = {
  label: 'Default',
  size: 'large'
}

export const Large = Template.bind({})
Large.args = {
  size: 'large'
}

export const medium = Template.bind({})
medium.args = {
  size: 'medium'
}

export const Small = Template.bind({})
Small.args = {
  size: 'small'
}
