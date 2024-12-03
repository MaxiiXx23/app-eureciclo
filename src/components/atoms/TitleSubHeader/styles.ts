import { Text } from 'react-native'
import styled from 'styled-components/native'


export const Label = styled(Text)`
  font-size: ${({theme}) => theme.spacing[7]};
  color: ${({theme}) => theme.colors.textDark};
  font-weight: bold;
`
