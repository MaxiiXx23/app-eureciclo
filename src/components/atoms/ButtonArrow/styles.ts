import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import styled from 'styled-components/native'

export const ContainerBtn = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-top: ${({ theme }) => theme.spacing[2]};
  padding-bottom: ${({ theme }) => theme.spacing[2]};
`

export const Title = styled.Text`

  color: ${({ theme }) => theme.colors.textDark};
  font-size: ${({ theme }) => theme.spacing[4]};
`


