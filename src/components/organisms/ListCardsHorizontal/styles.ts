import { Text, View } from 'react-native'
import styled from 'styled-components'

export const Container = styled(View)`
    width: 100%;
    alignItems: start;
    gap: ${({theme}) => theme.spacing[4]};
    marginTop: ${({theme}) => theme.spacing[10]};
`

export const Title = styled(Text)`
    fontSize: ${({theme}) => theme.spacing[5]};
    color: ${({theme}) => theme.colors.secondary};
    fontWeight: bold;
`