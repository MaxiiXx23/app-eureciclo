import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import styled from 'styled-components/native'

interface ILabelProps {
  color: 'shape' | 'primary'
}

export const Container = styled(View)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  gap: ${({ theme }) => theme.spacing['1']};
`

export const Label = styled(Text)<ILabelProps>`
  font-size: ${({ theme }) => theme.spacing[5]};
  font-weight: bold;
  color: ${({ theme, color }) => theme.colors[color]};
  
`

export const ContainerInput = styled(View)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: ${({ theme }) => theme.spacing[2]};
  border-width: ${({ theme }) => theme.spacing.px};
  border-color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.shape};
`

export const Input = styled(TextInput)`
  width: 85%;
  padding: ${({ theme }) => theme.spacing['3']};
  color: ${({ theme }) => theme.colors.textDark};
`

export const EyeBtn = styled(TouchableOpacity)``
