import { ReactElement } from 'react'

import { TextInputProps } from 'react-native'

import { Container, ContainerInput, Input, Label } from './styles'

interface IProps extends TextInputProps {
  label: string
  icon: ReactElement
}

export function InputIcon({ label, icon: Icon, ...rest }: IProps) {
  return (
    <Container>
      <Label>{label}</Label>
      <ContainerInput>
        {Icon}
        <Input {...rest} />
      </ContainerInput>
    </Container>
  )
}
