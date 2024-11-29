import { Text, View } from 'react-native'
import styled from 'styled-components/native'


export const TitleHeader = styled(Text)`
  fontSize: ${({theme}) => theme.spacing[5]};
  color: ${({theme}) => theme.colors.shape};
`

export const Content = styled(View)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.shape};
  paddingRight:  ${({theme}) => theme.spacing[4]};
  paddingLeft:  ${({theme}) => theme.spacing[4]};
  paddingTop:  ${({theme}) => theme.spacing[3]};
  paddingBottom:  ${({theme}) => theme.spacing[3]};

  gap: ${({theme}) => theme.spacing[4]};
`
