import { TextInputProps } from 'react-native'

import { useTheme } from 'styled-components'

import { MagnifyingGlass } from 'phosphor-react-native'
import { Container, ContainerInput, EyeBtn, Input } from './styles'

interface IProps extends TextInputProps {
  label: string
  color?: 'shape' | 'primary'
  handleSearch(text: string): void
}

export function InputSearch({ label, color='shape', handleSearch, ...rest }: IProps) {
  const theme = useTheme()

  return (
    <Container>
      <ContainerInput>
        <EyeBtn>
            <MagnifyingGlass size={32} color={theme.colors.primary} />
        </EyeBtn>
        <Input {...rest} placeholder={label} onChangeText={(e) => handleSearch(e)} />
      </ContainerInput>
    </Container>
  )
}
