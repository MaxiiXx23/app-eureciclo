import { Icons } from 'shared/imports/icons'
import { Title, WrapperIcon } from './styles'

interface IProps {
  width?: number
  height?: number
}

export function IconEuReciclo({ width= 120, height=140 }: IProps) {
  return (
    <WrapperIcon>
      <Icons.iconEuReciclo width={width} height={height} />
      <Title>EuReciclo</Title>
    </WrapperIcon>
  )
}
