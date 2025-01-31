import { Text, TouchableOpacity, View } from 'react-native'
import styled from 'styled-components'

export const Container = styled(TouchableOpacity)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: ${({theme}) => theme.spacing[8]};

  margin-top: ${({theme}) => theme.spacing[2]};
  margin-bottom: ${({theme}) => theme.spacing[2]};
`

export const Wrapper = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${({theme}) => theme.spacing[2]};

`

export const Title = styled(Text)`
  font-weight: semi-bold;
  font-size: ${({theme}) => theme.spacing[5]};
`