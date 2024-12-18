import { Text, View } from 'react-native'
import styled from 'styled-components/native'

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

export const Header = styled(View)`
    width: 100%;
    justify-content: center;
    align-items: start;
    gap: ${({theme}) => theme.spacing[4]};
`

export const Title = styled(Text)`
    font-weight: bold;
    color: ${({theme}) => theme.colors.textDark};
    font-size: ${({theme}) => theme.spacing[6]};
`

export const Description = styled(Text)`
    color: ${({theme}) => theme.colors.title};
    font-size: ${({theme}) => theme.spacing[4]};
`
// depois trocar para o componente do React Hook Form
export const Form = styled(View)`

    justify-content: center;
    align-items: center;
    gap: ${({theme}) => theme.spacing[1.5]};

    margin-top: ${({theme}) => theme.spacing[2]};

`