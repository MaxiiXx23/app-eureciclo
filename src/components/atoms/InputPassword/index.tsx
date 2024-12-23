import { useState } from 'react'
import { TextInputProps } from 'react-native'

import { useTheme } from 'styled-components'

import { Lock, Eye, EyeClosed } from 'phosphor-react-native'
import { Container, ContainerInput, EyeBtn, Input, Label } from './styles'

interface IProps extends TextInputProps {
  label: string
  color?: 'shape' | 'primary'
}

export function InputPassword({ label, color='shape', ...rest }: IProps) {
  const [show, setShow] = useState(false)
  const theme = useTheme()

  function handleClick() {
    setShow((prevState) => !prevState)
  }

  return (
    <Container>
      <Label color={color}>{label}</Label>
      <ContainerInput>
        <Lock size={32} color={theme.colors.primary} />
        <Input secureTextEntry={!show} {...rest} />
        <EyeBtn onPress={handleClick}>
          {show ? (
            <Eye size={32} color={theme.colors.primary} />
          ) : (
            <EyeClosed size={32} color={theme.colors.primary} />
          )}
        </EyeBtn>
      </ContainerInput>
    </Container>
  )
}
