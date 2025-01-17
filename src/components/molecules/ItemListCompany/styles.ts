import { Text, TouchableOpacity, View } from 'react-native'
import styled from 'styled-components/native'


export const Container = styled(TouchableOpacity)`
    flexDirection: row;
    height: ${({theme}) => theme.spacing[14]};
    width: 100%;
    background-color: ${({ theme }) => theme.colors.shape};
    justifyContent: space-between;
    alignItems: center;
    margin-top: ${({theme}) => theme.spacing[2]};
    margin-bottom: ${({theme}) => theme.spacing[2]};
    position: relative;

    border-width: ${({theme}) => theme.spacing.px};
    border-color: ${({ theme }) => theme.colors.primary};
    border-radius: ${({theme}) => theme.spacing[1]};

    padding-right: ${({theme}) => theme.spacing[2]};
    padding-left: ${({theme}) => theme.spacing[2]};
`

export const WrapperIcon = styled(View)`

    width: ${({theme}) => theme.spacing[10]};
    height: ${({theme}) => theme.spacing[10]};
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 999px;

    justify-content: center;
    align-items: center;

`

export const Content = styled(View)`
    justify-content: center;
    align-items: center;
    gap: ${({theme}) => theme.spacing[1]};
`

export const TextTitle = styled(Text)`
    color: ${({theme}) => theme.colors.textDark};
    font-weight: bold;
    font-size: ${({theme}) => theme.spacing[4]};
`

export const TextInfo = styled(Text)`
    color: ${({theme}) => theme.colors.title};
    font-weight: bold;
    font-size: ${({theme}) => theme.spacing[4]};
`
export const ContentRating = styled(View)`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: ${({theme}) => theme.spacing[1]};

`