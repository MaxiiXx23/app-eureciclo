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
  background-color: ${({theme}) => theme.colors.shape};
  paddingRight:  ${({theme}) => theme.spacing[3]};
  paddingLeft:  ${({theme}) => theme.spacing[3]};

  paddingBottom:  ${({theme}) => theme.spacing[3]};
  
  border-top-right-radius: ${({theme}) => theme.spacing[6]};
  border-top-left-radius: ${({theme}) => theme.spacing[6]};
`

export const ContainerInfos = styled(View)`
  paddingTop:  ${({theme}) => theme.spacing[4]};
  gap:  ${({theme}) => theme.spacing[5]};
`

export const WrapperLabel = styled(View)`
  justify-content: center;
  align-items: start;
  width: 100%;
  gap: ${({theme}) => theme.spacing[1]};
`
export const HeaderLabel = styled(View)`
  flex-direction: row;
  gap: ${({theme}) => theme.spacing[2]};
  justify-content: start;
  align-items: center;
`

export const HeaderTitle = styled(Text)`
  font-size: ${({theme}) => theme.spacing[5]};
  color: ${({theme}) => theme.colors.textDark};
  font-weight: bold;

`

export const Label = styled(Text)`
  font-size: ${({theme}) => theme.spacing[4]};
  color: ${({theme}) => theme.colors.textDark};
`