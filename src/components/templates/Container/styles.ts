import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const Container = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
`

export const ContainerMain = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
`
