import React from 'react'
import styled from 'styled-components'


const StyledInput = styled.input.attrs((props) => ({
  checked: props.checked || false,
}))`
  appearance: none;
  &::after {
    content: ${({ checked }) => (checked ? "'✓'" : "''")};
    width: 30px;
    height: 30px;
    
    border-color: #ccc;
    background-color: white;
    color: black;
    
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
    border-radius: 50%;
    border-width: 2px;
    border-style: solid;
  }
  
  &::before {
    content: "";
    display: block;
    position: absolute;
    border: none;
  }
`;


interface IToggleButtonProps {
  onHandler: () => void,
  checked: boolean
}


export const ToggleButton = ({onHandler, checked}: IToggleButtonProps) => {

  return (
    <StyledInput
      type={'checkbox'}
      checked={checked}
      onChange={onHandler}
    />
  )
}