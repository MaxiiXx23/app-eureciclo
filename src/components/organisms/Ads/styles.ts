import { Image } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled(Image)`
  height: ${({ theme }) => theme.spacing[40]};
  width: 100%;
  borderRadius: ${({ theme }) => theme.spacing[2]};
`