import React from 'react'
import styled from 'styled-components'
import {ReactComponent as TrashIcon} from '../../../../shared/images/icons/trash-icon.svg'

const DeleteButtonStl = styled.div`
  
`

export const DeleteButton = ({}) => {

  return (
    <DeleteButtonStl>
      <TrashIcon />
    </DeleteButtonStl>
  )
}