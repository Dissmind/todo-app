import React, {useState} from 'react'
import styled from 'styled-components'
import {DeleteButton} from "../../atoms/delete-button/delete-button";


const InputStl = styled.div`
  display: flex;
  width: 100%;
`

const InputAreaStl = styled.input`
  width: 90%;
  border: none;
  outline: none;
  font-size: 18px;
  margin: auto;
  
  &:focus {
    border-bottom: solid .5px black;
  }
`


const DeleteButtonStl = styled.div`
  width: 5%;
  color: #ccc;
`
interface IInputProps {
  onChangeHandler: () => void
}

export const Input = ({onChangeHandler}: IInputProps) => {

  return (
    <InputStl>

      <InputAreaStl
        autoFocus={true}
        type="text"
        onChange={onChangeHandler}
      />

      <DeleteButtonStl>
        <DeleteButton />
      </DeleteButtonStl>
    </InputStl>
  )
}