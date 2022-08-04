// import React from 'react';

// import { Button } from './Button';

// // More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// export default {
//   title: 'Example/Button',
//   component: Button,
//   // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
// };

// // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template = (args) => <Button {...args} />;

// export const Primary = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };

import Button from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: { handleClick: {action: "handleClick"}}
}

const Template = args => <Button {...args} />

// export const Red =() => <Button label="Press me" backgroundColor="red"/>
export const Green = Template.bind({})
Green.args = {
  backgroundColor:"green",
  label: "Press Me",
  size:"md",
}

export const Small = Template.bind({})
Small.args = {
  backgroundColor:"red",
  label: "Press Me",
  size:"sm",
}


export const Large = Template.bind({})
Large.args = {
  backgroundColor:"blue",
  label: "Press Me xfhg bssds",
  size:"lg",
}

export const LongLarge = Template.bind({})
LongLarge.args = {
  backgroundColor:"orange",
  label: "Press Me xfhg blkkla csfadsfs",
  size:"lg",
}

