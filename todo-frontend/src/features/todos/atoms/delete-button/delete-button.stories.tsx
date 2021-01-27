import { DeleteButton } from './delete-button'

export default {
  title: 'Todos/Atoms/DeleteButton',
  component: DeleteButton
}

//@ts-ignore
const Template = (args) => <DeleteButton {...args} />

export const Basic = Template.bind({})

//@ts-ignore
Basic.args = {}