import React from 'react'
import { ITodo } from '../../types'
import {TodoItem} from "../todo-item/todo-item";

interface ITodoList {
  todos: ITodo[]
}


export const TodoList = ({todos}: ITodoList) => {

  return (
    <>
      {
       todos.map(i => <TodoItem toggleStatus={i.checked} label={i.title} />)
      }
    </>
  )
}