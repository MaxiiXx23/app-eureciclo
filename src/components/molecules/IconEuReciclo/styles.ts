import { Text, View } from 'react-native'
import styled from 'styled-components'

export const WrapperIcon = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: ${({ theme }) => theme.spacing['3']};
`

export const Title = styled(Text)`
  font-size: ${({ theme }) => theme.spacing['5']};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.shape};
`
