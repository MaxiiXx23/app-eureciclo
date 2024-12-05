import { Text, TouchableOpacityProps } from 'react-native'
import { ContainerBtn, Title } from './styles'
import { CaretRight } from 'phosphor-react-native'

interface IProps extends TouchableOpacityProps {
  title: string
}

export function ButtonArrow({ title, ...rest }: IProps) {
  return (
    <ContainerBtn {...rest}>
      <Title>{title}</Title>
      <Text><CaretRight size={24} /></Text>
    </ContainerBtn>
  )
}
