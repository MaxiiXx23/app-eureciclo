import { View, TextInput } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled(View)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  gap: ${({ theme }) => theme.spacing['1']};
`

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.spacing['4']};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.shape};
`

export const ContainerInput = styled(View)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: ${({ theme }) => theme.spacing['2']};
  background-color: ${({ theme }) => theme.colors.shape};
`

export const Input = styled(TextInput)`
  width: 85%;
  padding: ${({ theme }) => theme.spacing['4']};
  color: ${({ theme }) => theme.colors.textDark};
`

export const WrapperIcon = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
`