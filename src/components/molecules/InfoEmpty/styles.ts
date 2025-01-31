import { Text, View } from 'react-native'
import styled from 'styled-components'


export const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: ${({theme}) => theme.spacing[5]};
  background: ${({theme}) => theme.colors.shape};
`

export const Description = styled(Text)`
  font-weight: bold;
  font-size: ${({theme}) => theme.spacing[4]};
`