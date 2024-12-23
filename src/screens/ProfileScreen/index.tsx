import { ContainerMain } from 'components/templates/Container/styles'

import { useTheme } from 'styled-components'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ProfileStackParamList } from 'shared/routes/stacksParamsList'
import { ContainerNavs, Content, Label, Title, WrapperLabel } from './styles'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { Profile } from 'components/organisms/Profile'
import { ButtonArrow } from 'components/atoms/ButtonArrow'

type NavProps = NativeStackNavigationProp<ProfileStackParamList, 'ProfileInitial'>

export function ProfileScreen() {
  const theme = useTheme()
  const navigation = useNavigation<NavProps>()

//   function handleNavToDonationScreen() {
//     navigation.navigate('Donation')
//   }

  return (
    <SafeAreaProvider>
      <ContainerMain>
          <Content>
                <Profile />
                <ContainerNavs>
                    <Title>Informações</Title>
                    <WrapperLabel>
                        <Label>Nome</Label>
                        <ButtonArrow title='Max Jônatas' disabled />
                    </WrapperLabel>
                    <WrapperLabel>
                        <Label>Telefone</Label>
                        <ButtonArrow title='+55 (11) 98144-5795' />
                    </WrapperLabel>

                    <WrapperLabel>
                        <Label>E-mail</Label>
                        <ButtonArrow title='max.232017@gmail.com' />
                    </WrapperLabel>
                </ContainerNavs>
          </Content>
      </ContainerMain>
    </SafeAreaProvider>

  )
}
