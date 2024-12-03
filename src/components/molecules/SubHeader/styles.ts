import { Text, View } from 'react-native'
import styled from 'styled-components/native'


export const Container = styled(View)`
    justifyContent: center;
    alignItems: start;
    gap: ${({ theme}) => theme.spacing[2]};

    margin-bottom: ${({ theme}) => theme.spacing[2]};
`

export const Description = styled(Text)`
    fontSize: ${({ theme}) => theme.spacing[4]};
    color: ${({ theme}) => theme.colors.title};
    lineHeight: ${({ theme}) => theme.spacing[5]};
`
