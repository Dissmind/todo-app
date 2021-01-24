import {ToggleButton} from "./toggle-button";


export default {
  title: 'Todos/Molecules/ToggleButton',
  component: ToggleButton
}

// @ts-ignore
const Template = (args) => <ToggleButton {...args} />

export const Basic = Template.bind({})


// @ts-ignore
Basic.args = {
  checked: false,
  onHandler: () => {}
}



