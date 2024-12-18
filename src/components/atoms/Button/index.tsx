import { TouchableOpacityProps } from 'react-native'
import { ContainerBtn, Title } from './styles'

interface IProps extends TouchableOpacityProps {
  color: 'primary' | 'secondary' | 'dangerPrimary' | 'button'
  title: string
}

export function Button({ color, title, ...rest }: IProps) {
  return (
    <ContainerBtn color={color} {...rest} activeOpacity={0.7}>
      <Title>{title}</Title>
    </ContainerBtn>
  )
}
