import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import styled from 'styled-components/native'

interface IButtonProps extends TouchableOpacityProps {
  color: 'primary' | 'secondary' | 'dangerPrimary' | 'button'
}

export const ContainerBtn = styled(TouchableOpacity)<IButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 16px;
  background-color: ${({ theme, color }) => theme.colors[color]};
  padding: ${({ theme }) => theme.spacing['5']};
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: 16px;
  font-weight: bold;
`
