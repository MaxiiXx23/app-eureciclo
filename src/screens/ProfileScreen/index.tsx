import { ContainerMain } from 'components/templates/Container/styles'

import { Gear, HandCoins, House, Lock, Question, ShieldCheck, User, UsersFour, Wallet } from "phosphor-react-native";

import { useTheme } from 'styled-components'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ProfileStackParamList } from 'shared/routes/stacksParamsList'
import { ContainerBtns, ContainerNavs, Content } from './styles'
import { Header } from 'components/organisms/Header'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { InfoProfile } from 'components/organisms/InfoProfile'
import { BtnNavProfile } from 'components/molecules/BtnNavProfile'
import { BtnNavArrow } from 'components/molecules/BtnNavArrow';

type NavProps = NativeStackNavigationProp<ProfileStackParamList, 'ProfileInitial'>

export function ProfileScreen() {
  const theme = useTheme()
  const navigation = useNavigation<NavProps>()

  return (
    <SafeAreaProvider>
      <ContainerMain>
          <Header />
          <Content>
                <InfoProfile />
                <ContainerBtns>
                    <BtnNavProfile icon={User} title='PERFIL' />
                    <BtnNavProfile icon={HandCoins} title='DOE' />
                    <BtnNavProfile icon={Question} title='AJUDA' />
                </ContainerBtns>

                <ContainerNavs>
                  <BtnNavArrow icon={Gear} label='Configurações' />
                  <BtnNavArrow icon={ShieldCheck} label='Segurança' />
                  <BtnNavArrow icon={Lock} label='Privacidade' />
                  <BtnNavArrow icon={House} label='Endereço' />
                  <BtnNavArrow icon={Wallet} label='Adicionar negócio' />
                  <BtnNavArrow icon={UsersFour} label='Contatos de confiança' />
                </ContainerNavs>

          </Content>
      </ContainerMain>
    </SafeAreaProvider>

  )
}
