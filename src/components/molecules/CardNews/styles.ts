import { Image, Text, View } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled(View)`
    flexDirection: row;
    height: ${({theme}) => theme.spacing[40]};
    width: ${({theme}) => theme.spacing[80]};
    background-color: ${({ theme }) => theme.colors.secondary};
    justifyContent: center;
    alignItems: center;
    borderRadius: ${({theme}) => theme.spacing[2]};
    overflow: hidden;

    marginLeft: ${({theme}) => theme.spacing[3]};
`

export const Title = styled(Text)`
    fontSize: ${({theme}) => theme.spacing[4]};
    color: ${({theme}) => theme.colors.shape};
    
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

`

export const ContainerDescription = styled(View)`
    height: 100%;
    width: 55%;
    padding: ${({theme}) => theme.spacing[2]};
    justifyContent: center;
    alignItems: center;
    gap: ${({theme}) => theme.spacing[4]}
`


export const ContainerImage = styled(Image)`
    height: 100%;
    width: 45%;
    justifyContent: center;
    alignItems: center;
`
export const BtnArrow = styled(Text)`

    display: flex;
    flexDirection: row;
    justifyContent: start;
    alignItems: center;
    gap: ${({theme}) => theme.spacing[0.5]};

    fontSize: ${({theme}) => theme.spacing[3.5]};
    color: ${({theme}) => theme.colors.background};

`