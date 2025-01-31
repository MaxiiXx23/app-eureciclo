import { ScrollView, View } from 'react-native'
import styled from 'styled-components'

export const Content = styled(View)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.shape};
  paddingRight:  ${({theme}) => theme.spacing[3]};
  paddingLeft:  ${({theme}) => theme.spacing[3]};
  paddingTop:  ${({theme}) => theme.spacing[3]};
  paddingBottom:  ${({theme}) => theme.spacing[3]};

  justify-content: space-between;
  align-items: start;

  border-top-right-radius: ${({theme}) => theme.spacing[6]};
  border-top-left-radius: ${({theme}) => theme.spacing[6]};
`

export const ContainerBtns = styled(View)`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${({theme}) => theme.spacing[8]};

  margin-top: ${({theme}) => theme.spacing[2]};
`

export const ContainerNavs = styled(ScrollView)`
  flex: 1;
  margin-top: ${({theme}) => theme.spacing[8]};
`