import {TodoItem} from "./todo-item";


export default {
  title: 'Todos/Organisms/TodoItem',
  component: TodoItem
}

// @ts-ignore
const Template = (args) => <TodoItem {...args} />

export const Basic = Template.bind({})


// @ts-ignore
Basic.args = {
  label: 'Todo item test'
}



