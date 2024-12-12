import { Image, Text, View } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled(View)`
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: ${({theme}) => theme.spacing[4]};
`

export const WrapperProfile = styled(View)`
    justify-content: center;
    align-items: center;
    gap: ${({theme}) => theme.spacing[2]};
`

export const ProfileImage = styled(Image)`
    width: ${({theme}) => theme.spacing[24]};
    height: ${({theme}) => theme.spacing[24]};
    border-radius: 999px;
`

export const Name = styled(Text)`
    font-weight: bold;
    font-size: ${({theme}) => theme.spacing[5]};
`

export const WrapperLabel = styled(View)`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: ${({theme}) => theme.spacing[2]};
`

export const LabelRating = styled(Text)`
    font-size: ${({theme}) => theme.spacing[5]};
`

export const TextRating = styled(Text)`
    font-weight: bold;
    font-size: ${({theme}) => theme.spacing[5]};
`

export const WrapperTitle = styled(View)`
    justify-content: center;
    align-items: center;
    gap: ${({theme}) => theme.spacing[2]};
`

export const Description = styled(Text)`
    font-weight: bold;
    font-size: ${({theme}) => theme.spacing[5]};

    color: ${({theme}) => theme.colors.primary};
`