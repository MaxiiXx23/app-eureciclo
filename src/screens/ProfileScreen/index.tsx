import { useContext } from 'react'

import { useTheme } from 'styled-components'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { AuthContext } from 'contexts/AuthContext'

import { ContainerMain } from 'components/templates/Container/styles'
import { ContainerNavs, Content, Label, Title, WrapperLabel } from './styles'
import { Profile } from 'components/organisms/Profile'
import { ButtonArrow } from 'components/atoms/ButtonArrow'

import { ProfileStackParamList } from 'shared/routes/stacksParamsList'

type NavProps = NativeStackNavigationProp<ProfileStackParamList, 'ProfileInitial'>

export function ProfileScreen() {
  const theme = useTheme()
  const navigation = useNavigation<NavProps>()

  const { userAuth } = useContext(AuthContext)

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
                        <ButtonArrow title={`${userAuth.firstName} ${userAuth.lastName}`} disabled />
                    </WrapperLabel>
                    <WrapperLabel>
                        <Label>Telefone</Label>
                        <ButtonArrow title='+55 (11) 98144-5795' />
                    </WrapperLabel>

                    <WrapperLabel>
                        <Label>E-mail</Label>
                        <ButtonArrow title={userAuth.email} />
                    </WrapperLabel>
                </ContainerNavs>
          </Content>
      </ContainerMain>
    </SafeAreaProvider>

  )
}
