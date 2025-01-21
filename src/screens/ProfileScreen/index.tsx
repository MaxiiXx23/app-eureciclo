import { useContext } from 'react'

import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { AuthContext } from 'contexts/AuthContext'

import { ContainerMain } from 'components/templates/Container/styles'
import { ContainerNavs, Content, Label, Title, WrapperLabel } from './styles'
import { Profile } from 'components/organisms/Profile'
import { ButtonArrow } from 'components/atoms/ButtonArrow'

import { ProfileConfigStackParamList } from 'shared/routes/stacksParamsList'

type NavProps = NativeStackNavigationProp<ProfileConfigStackParamList, 'Name'>

export function ProfileScreen() {
  const navigation = useNavigation<NavProps>()

  const { userAuth } = useContext(AuthContext)

  function handleNavToNameConfig() {
    navigation.navigate('Name')
  }

  function handleNavToPhoneConfig() {
    navigation.navigate('Phone')
  }


  return (
    <SafeAreaProvider>
      <ContainerMain>
          <Content>
                <Profile />
                <ContainerNavs>
                    <Title>Informações</Title>
                    <WrapperLabel>
                        <Label>Nome</Label>
                        <ButtonArrow title={`${userAuth.firstName} ${userAuth.lastName}`} onPress={handleNavToNameConfig} />
                    </WrapperLabel>
                    <WrapperLabel>
                        <Label>Telefone</Label>
                        <ButtonArrow title={`${userAuth.phone}`} onPress={handleNavToPhoneConfig} />
                    </WrapperLabel>

                    <WrapperLabel>
                        <Label>E-mail</Label>
                        <ButtonArrow title={userAuth.email} disabled />
                    </WrapperLabel>
                </ContainerNavs>
          </Content>
      </ContainerMain>
    </SafeAreaProvider>

  )
}
