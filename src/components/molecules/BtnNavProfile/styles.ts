import { Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components'

export const Container = styled(TouchableOpacity)`

    width: ${({theme}) => theme.spacing[20]};
    height: ${({theme}) => theme.spacing[20]};

    justify-content: center;
    align-items: center;
    gap: ${({theme}) => theme.spacing[1]};
    background-color: ${({theme}) => theme.colors.primary};

    border-radius: ${({theme}) => theme.spacing[4]};

`

export const TitleBtn = styled(Text)`
    font-size: ${({theme}) => theme.spacing[4]};
    color: ${({theme}) => theme.colors.shape};
`