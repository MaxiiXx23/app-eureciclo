import { ScrollView, Text, View } from 'react-native'
import styled from 'styled-components'

export const Content = styled(View)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.shape};
  paddingRight:  ${({theme}) => theme.spacing[3]};
  paddingLeft:  ${({theme}) => theme.spacing[3]};
  paddingTop:  ${({theme}) => theme.spacing[3]};
  paddingBottom:  ${({theme}) => theme.spacing[3]};

  justify-content: start;
  align-items: start;

  border-top-right-radius: ${({theme}) => theme.spacing[6]};
  border-top-left-radius: ${({theme}) => theme.spacing[6]};
`

export const ContainerNavs = styled(ScrollView)`
  flex: 1;
  margin-top: ${({theme}) => theme.spacing[8]};
`

export const Title = styled(Text)`
  font-weight: bold;
  font-size: ${({theme}) => theme.spacing[5]};
  color: ${({theme}) => theme.colors.textDark};
  margin-bottom: ${({theme}) => theme.spacing[6]};
`
export const WrapperLabel = styled(View)`
  width: 100%;
  justify-content: center;
  align-items: start;
  margin-top: ${({theme}) => theme.spacing[1]};
  margin-bottom: ${({theme}) => theme.spacing[1]};
`

export const Label = styled(Text)`
  font-weight: bold;
  font-size: ${({theme}) => theme.spacing[4]};
  color: ${({theme}) => theme.colors.textDark};
`