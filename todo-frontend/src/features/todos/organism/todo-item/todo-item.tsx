import React from 'react'
import styled from 'styled-components'
import {ToggleButton} from "../../molecules/toggle-button/toggle-button";
import {DeleteButton} from "../../atoms/delete-button/delete-button";

interface ITodoItemProps {
  toggleStatus: boolean,
  label: string
}


const TodoItemStl = styled.div`
  
  display: flex;
  width: 100%;
  padding-bottom: 5px;
  padding-top: 20px;
  border-bottom: solid #ccc .5px;
`


const TitleStl = styled.div<{toggleStatus: boolean}>`
  text-decoration: ${(props) => props.toggleStatus ? 'line-through' : 'none'};
  font-size: 26px;
  padding: 3px;
  padding-left: 20px;
  width: 90%;
`


const ToggleButtonWrapperStl = styled.div`
  padding: 5px;
  width: 5%;
`


const DeleteButtonWrapperStl = styled.div`
  color: #ccc;
  padding: 5px;
  width: 5%;
  
  &:hover {
    color: #333;
    cursor: pointer;
  }
`




export const TodoItem = ({toggleStatus, label}: ITodoItemProps) => {

  return (
    <TodoItemStl>
      <ToggleButton checked={toggleStatus} />

      <TitleStl toggleStatus={toggleStatus}>
        {label}
      </TitleStl>

      <DeleteButtonWrapperStl>
        <DeleteButton />
      </DeleteButtonWrapperStl>
    </TodoItemStl>
  )
}