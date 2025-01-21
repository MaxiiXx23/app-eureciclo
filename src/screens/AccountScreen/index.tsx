import { useContext } from 'react';

import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { AuthContext } from 'contexts/AuthContext';

import { Gear, HandCoins, House, Lock, Question, ShieldCheck, SignOut, User, UsersFour, Wallet } from "phosphor-react-native";

import { ContainerMain } from 'components/templates/Container/styles'
import { ContainerBtns, ContainerNavs, Content } from './styles'
import { Header } from 'components/organisms/Header'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { InfoProfile } from 'components/organisms/InfoProfile'
import { BtnNavProfile } from 'components/molecules/BtnNavProfile'
import { BtnNavArrow } from 'components/molecules/BtnNavArrow';

import { ProfileStackParamList } from 'shared/routes/stacksParamsList'


type NavProps = NativeStackNavigationProp<ProfileStackParamList, 'ProfileInitial'>

export function AccountScreen() {
  const navigation = useNavigation<NavProps>()

  const { logout } = useContext(AuthContext)

  function handleNavToProfileScreen() {
    navigation.navigate('Profile')
  }

  function handleNavToDonationScreen() {
    navigation.navigate('Donation')
  }

  function handleNavToHelpScreen() {
    navigation.navigate('Help')
  }

  function handleNavToAddressScreen() {
    navigation.navigate('Address', {
      type: 1
    })
  }

  async function handleSignOut() {
    await logout()
  }

  return (
    <SafeAreaProvider>
      <ContainerMain>
          <Header />
          <Content>
                <InfoProfile />
                <ContainerBtns>
                    <BtnNavProfile icon={User} title='PERFIL' onPress={handleNavToProfileScreen} />
                    <BtnNavProfile icon={HandCoins} title='DOE' onPress={handleNavToDonationScreen} />
                    <BtnNavProfile icon={Question} title='AJUDA' onPress={handleNavToHelpScreen} />
                </ContainerBtns>

                <ContainerNavs>
                  <BtnNavArrow icon={Gear} label='Configurações' />
                  <BtnNavArrow icon={ShieldCheck} label='Segurança' />
                  <BtnNavArrow icon={Lock} label='Privacidade' />
                  <BtnNavArrow icon={House} label='Endereço' onPress={handleNavToAddressScreen} />
                  <BtnNavArrow icon={Wallet} label='Adicionar negócio' />
                  <BtnNavArrow icon={UsersFour} label='Contatos de confiança' />
                  <BtnNavArrow icon={SignOut} label='Sair' onPress={handleSignOut} />
                </ContainerNavs>

          </Content>
      </ContainerMain>
    </SafeAreaProvider>

  )
}
