import { Image, Text, TouchableOpacity, View } from 'react-native'
import styled from 'styled-components/native'


export const Container = styled(TouchableOpacity)`
    flexDirection: row;
    height: ${({theme}) => theme.spacing[60]};
    width: ${({theme}) => theme.spacing[80]};
    background-color: ${({ theme }) => theme.colors.primary};
    justifyContent: start;
    alignItems: center;
    borderRadius: ${({theme}) => theme.spacing[3]};
    overflow: hidden;

    margin-top: ${({theme}) => theme.spacing[4]};

    position: relative;
`

export const Content = styled(View)`
    height: 100%;
    width: 90%;
    padding: ${({theme}) => theme.spacing[2]};
    justifyContent: start;
    alignItems: start;
    gap: ${({theme}) => theme.spacing[2]};
`

export const Title = styled(Text)`
    color: ${({ theme}) => theme.colors.shape};
    font-weight: bold;
    font-size:  ${({ theme}) => theme.spacing[6]};
    text-shadow: #000 1px 1px 1px;
`

export const Description = styled(Text)`
    color: ${({ theme}) => theme.colors.shape};
    font-size:  ${({ theme}) => theme.spacing[5]};
    line-height:  ${({ theme}) => theme.spacing[5]};
    font-weight: semi-bold;
    text-shadow: #000 1px 1px 1px;
    
`

export const ContainerImage = styled(Image)`
    height: ${({ theme}) => theme.spacing[48]};
    width: ${({ theme}) => theme.spacing[64]};
    justifyContent: center;
    alignItems: center;
    position: absolute;

    bottom: 0;
    right: 0;
    z-index: -1;
`