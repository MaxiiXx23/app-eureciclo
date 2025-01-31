import { Text, View } from 'react-native'
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

export const ContainerInfos = styled(View)`
    width: 100%;
    margin-top: ${({theme}) => theme.spacing[4]};
    justify-content: center;
    align-items: start;
    gap: ${({theme}) => theme.spacing[5]};
`

export const WrapperInfo = styled(View)`
    width: 100%;
    justify-content: center;
    align-items: start;
    gap: ${({theme}) => theme.spacing[1]};
`

export const TitleInfo = styled(Text)`
    font-weight: bold;
    color: ${({theme}) => theme.colors.textDark};
    font-size: ${({theme}) => theme.spacing[5]};
`

export const LabelInfo = styled(Text)`
    font-weight: bold;
    color: ${({theme}) => theme.colors.textDark};
    font-size: ${({theme}) => theme.spacing[4]};
`

export const ContainerThanks = styled(View)`
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: ${({theme}) => theme.spacing[8]};

    margin-top: ${({theme}) => theme.spacing[10]};
`

export const TextThanks = styled(Text)`
    font-weight: bold;
    color: ${({theme}) => theme.colors.title};
    font-size: ${({theme}) => theme.spacing[5]};
    text-align: center;
`

export const WrapperTitle = styled(View)`

    justify-content: center;
    align-items: center;
    gap: ${({theme}) => theme.spacing[2]};
`

export const DescriptionThanks = styled(Text)`
    font-weight: bold;
    font-size: ${({theme}) => theme.spacing[5]};

    color: ${({theme}) => theme.colors.primary};
`