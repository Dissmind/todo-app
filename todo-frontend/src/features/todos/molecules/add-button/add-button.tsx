import React from 'react'
import styled from 'styled-components'
import {ReactComponent as PlusIcon} from '../../../../shared/images/icons/plus-icon.svg'


interface IAddButton {
  link: string
}

const AddButtonStl = styled.div`
  display: inline-block;
  border: solid white .5px;
  border-radius: 50%;
  padding: 18px;
  color: #006cff;
  box-shadow: 0px 16px 16px rgba(0, 0, 0, 0.33);

  transition: box-shadow .5s;
  
  &:hover {
    transition: box-shadow .5s;
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.33);
  }
`


export const AddButton = ({link}: IAddButton) => {

  // TODO: link to add todo page

  return (
    <AddButtonStl>
      <PlusIcon />
    </AddButtonStl>
  )
}