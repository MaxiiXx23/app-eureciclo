import { Image, View } from 'react-native'
import styled from 'styled-components'


export const Container = styled(View)`
  width: 100%;
  height: ${({theme}) => theme.spacing[48]};
  background-color: ${({theme}) => theme.colors.shape};
  justify-content: center;
  align-items: center;
`

export const ContainerPreview = styled(View)`
  width: ${({theme}) => theme.spacing[60]};
  height: ${({theme}) => theme.spacing[48]};
  position: relative;

  background-color: ${({theme}) => theme.colors.shape};
  border-radius: ${({theme}) => theme.spacing[20]};
`

export const Preview = styled(Image)`
  width: ${({theme}) => theme.spacing[60]};
  height: ${({theme}) => theme.spacing[48]};
  background-color: ${({theme}) => theme.colors.shape};

  border-radius: ${({theme}) => theme.spacing[20]};
  overflow: hidden;

  border-radius: ${({theme}) => theme.spacing[20]};
  border-width: ${({theme}) => theme.spacing.px};
  border-color: ${({theme}) => theme.colors.primary};
`
