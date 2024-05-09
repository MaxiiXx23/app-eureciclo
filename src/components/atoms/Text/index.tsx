import { ReactNode } from 'react'
import { TextProps } from 'react-native'

import { TextBold, TextPrimary, WrapperText } from './styles'

interface IProps {
  children: ReactNode
}

interface ITextLinkProps extends TextProps {
  text: ReactNode
}

function WrapperTextInline({ children }: IProps) {
  return <WrapperText>{children}</WrapperText>
}

function Text({ text, ...rest }: ITextLinkProps) {
  return <TextPrimary {...rest}>{text}</TextPrimary>
}

function TextLink({ text, ...rest }: ITextLinkProps) {
  return <TextBold {...rest}>{text}</TextBold>
}

export const TextShape = {
  WrapperTextInline,
  Text,
  TextLink,
}
