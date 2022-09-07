import React from 'react'
import Modal from '.'

export default {
  title: 'Modal',
  common: Modal
}

const Template = args => <Modal {...args} />
export const Default = Template.bind({})
Default.args = {
  title: 'Modal',
  label: 'Input'
}
