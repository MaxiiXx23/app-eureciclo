import { Text, View } from 'react-native'

import styled from 'styled-components'

export const WrapperText = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing['2']};
`

export const TextPrimary = styled(Text)`
  font-size: ${({ theme }) => theme.spacing['4']};
  color: ${({ theme }) => theme.colors.shape};
`

export const TextBold = styled(Text)`
  font-size: ${({ theme }) => theme.spacing['4']};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.button};
`
