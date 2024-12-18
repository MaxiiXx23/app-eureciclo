import { ReactElement } from 'react'

import { TextInputProps } from 'react-native'

import { Container, ContainerInput, Input, Label } from './styles'

interface IProps extends TextInputProps {
  label: string
  icon: ReactElement
  color?: 'shape' | 'primary'
}

export function InputIcon({ label, icon: Icon, color = 'shape', ...rest }: IProps) {
  return (
    <Container>
      <Label color={color}>{label}</Label>
      <ContainerInput>
        {Icon}
        <Input {...rest} />
      </ContainerInput>
    </Container>
  )
}
