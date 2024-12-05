import { ScrollView, Text, View } from 'react-native'
import styled from 'styled-components/native'


export const TitleHeader = styled(Text)`
  fontSize: ${({theme}) => theme.spacing[5]};
  color: ${({theme}) => theme.colors.shape};
`

export const ContainerCards = styled(View)`
  flex: 1;
  justifyContent: center;
  alignItems: center;
`

export const Content = styled(ScrollView)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.shape};
  paddingRight:  ${({theme}) => theme.spacing[3]};
  paddingLeft:  ${({theme}) => theme.spacing[3]};
  paddingTop:  ${({theme}) => theme.spacing[3]};
  paddingBottom:  ${({theme}) => theme.spacing[3]};

  border-top-right-radius: ${({theme}) => theme.spacing[6]};
  border-top-left-radius: ${({theme}) => theme.spacing[6]};
`
