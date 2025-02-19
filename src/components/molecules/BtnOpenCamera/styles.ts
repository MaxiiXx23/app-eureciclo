import { Image, TouchableOpacity, View } from 'react-native'
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
  background-color: ${({theme}) => theme.colors.shape};

  border-radius: ${({theme}) => theme.spacing[20]};
  position: relative;
`

export const Button = styled(TouchableOpacity)`
  width: ${({theme}) => theme.spacing[10]};
  height: ${({theme}) => theme.spacing[10]};
  background-color: ${({theme}) => theme.colors.shape};
  justify-content: center;
  align-items: center;

  border-radius: ${({theme}) => theme.spacing[5]};
  border-width: ${({theme}) => theme.spacing[0.5]};
  border-color: ${({theme}) => theme.colors.shape};

  position: absolute;
  bottom: 0;
  right: 0;

  z-index: 1;
`

export const Preview = styled(Image)`
  width: ${({theme}) => theme.spacing[60]};
  height: ${({theme}) => theme.spacing[48]};
  background-color: ${({theme}) => theme.colors.shape};

  border-radius: ${({theme}) => theme.spacing[20]};
  overflow: hidden;
`
