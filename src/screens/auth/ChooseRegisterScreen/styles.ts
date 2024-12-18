import { View } from 'react-native'
import styled from 'styled-components/native'

export const ContainerForm = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-left: ${({ theme }) => theme.spacing['6']};
  padding-right: ${({ theme }) => theme.spacing['6']};
  gap: ${({ theme }) => theme.spacing['11']};
`

export const ContainerIcon = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: ${({ theme }) => theme.spacing['6']};
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.spacing[6]};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.shape};
`

export const ContainerBtns = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: ${({ theme }) => theme.spacing[6]};
`

export const WrapperTextRegister = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing[2]};
`

export const TextRegister = styled.Text`
  font-size: ${({ theme }) => theme.spacing[4]};
  color: ${({ theme }) => theme.colors.shape};
`

export const TextSignUp = styled.Text`
  font-size: ${({ theme }) => theme.spacing[4]};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.button};
`
