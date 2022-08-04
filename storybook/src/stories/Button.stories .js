import Button from "../components/Button";

export default {
  titile: "Button",
  component: Button,
}

const Template = args => <Button {...args} />

// export const Red =() => <Button label="Press me" backgroundColor="red"/>
export const Red = Template.bind({})
Red.args = {
  backgroundColor:"red",
  label: "Press Me",
  size:"md",
}