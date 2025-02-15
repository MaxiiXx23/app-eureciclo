import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import styled from 'styled-components'

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
  margin-bottom: ${({ theme }) => theme.spacing[3]};
`

export const Title = styled(Text)`
  color: ${({ theme }) => theme.colors.shape};
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
`


