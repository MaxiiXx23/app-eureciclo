import { View } from 'react-native'
import styled from 'styled-components'

export const ContainerForm = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-left: ${({ theme }) => theme.spacing[6]};
  padding-right: ${({ theme }) => theme.spacing[6]};
  gap: ${({ theme }) => theme.spacing[8]};
`

export const ContainerInputs = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: ${({ theme }) => theme.spacing[4]};
`

export const ContainerOptions = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: ${({ theme }) => theme.spacing[6]};
`
