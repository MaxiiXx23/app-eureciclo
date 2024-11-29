import { Icons } from 'shared/imports/icons'
import { WrapperIcon } from './styles'

interface IProps {
  width?: number
  height?: number
}

export function Logo({ width= 120, height=140 }: IProps) {
  return (
    <WrapperIcon>
      <Icons.logoName width={width} height={height} />
    </WrapperIcon>
  )
}