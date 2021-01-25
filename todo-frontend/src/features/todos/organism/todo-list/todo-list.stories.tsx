import {TodoList} from "./todo-list";


export default {
  title: 'Todos/Organisms/TodoList',
  component: TodoList
}

// @ts-ignore
const Template = (args) => <TodoList {...args} />

export const Basic = Template.bind({})


// @ts-ignore
Basic.args = {
  todos: [
    {
      id: 1,
      title: 'First',
      checked: true
    },
    {
      id: 1,
      title: 'Second',
      checked: false
    },
    {
      id: 1,
      title: 'Third',
      checked: false
    },
    {
      id: 1,
      title: 'Forth',
      checked: false
    }
  ]
}



