import React, { ReactElement } from 'react'
import { CustomDiv } from './styles'

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props): ReactElement => {
  return <CustomDiv>Example Component: {text}</CustomDiv>
}
