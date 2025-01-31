import { TouchableHighlight, View } from 'react-native'
import styled from 'styled-components'



export const Container = styled(View)`
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    gap: ${({ theme }) =>  theme.spacing[5]};

`

export const ButtonNav = styled(TouchableHighlight)`

    width: ${({ theme }) =>  theme.spacing[10]};
    height: ${({ theme }) =>  theme.spacing[10]};

    justify-content: center;
    align-items: center;
    border-radius: 999px;

    background-color: ${({ theme }) =>  theme.colors.primary};
`
