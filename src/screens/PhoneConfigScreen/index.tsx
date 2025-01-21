import { useContext, useEffect, useState } from 'react'

import { ToastAndroid } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { AuthContext } from 'contexts/AuthContext'
import { UsersAPIs } from 'apis/users'
import { normalizePhoneNumber } from 'utils/masks'

import { PencilSimpleLine } from 'phosphor-react-native'

import { ContainerMain } from 'components/templates/Container/styles'
import { ContainerInputs, Content } from './styles'
import { ProfileStackParamList } from 'shared/routes/stacksParamsList'
import { SubHeader } from 'components/molecules/SubHeader'
import { InputIcon } from 'components/atoms/InputIcon'
import { Button } from 'components/atoms/Button'


type NavProps = NativeStackNavigationProp<ProfileStackParamList, 'ProfileInitial'>

export function PhoneConfigScreen() {
    const { userAuth, setUserAuth } = useContext(AuthContext)
    const [phone, setPhone] = useState<string | undefined>()

    const navigation = useNavigation<NavProps>()
    const showToast = (text: string) => {
        ToastAndroid.show(text, ToastAndroid.SHORT);
    }
    
    async function handleUpdateFecth () {
        if(!phone || phone.length < 15) {
            return showToast('Telefone não preenchido corretamente!')
        }

        await UsersAPIs.patchPhone({
            phone,
        })

        setUserAuth({
            ...userAuth,
            phone,
        })
        navigation.goBack()
    }

    function handleChangeStatePhone(e: string) {
        const value = normalizePhoneNumber(e)
        setPhone(value)
    }

    useEffect(() => {
        setPhone(userAuth.phone)
    }, [userAuth])

  return (
    <SafeAreaProvider>
      <ContainerMain>
          <Content>
                <SubHeader
                    title='Telefone' 
                    description='Este é telefone estará visível a outros usuários.'
                />
                <ContainerInputs>
                    <InputIcon 
                        icon={<PencilSimpleLine color='#4ADE80' size={28} />} 
                        label='Telefone' 
                        color='primary'
                        keyboardType="numeric"
                        maxLength={15}
                        defaultValue={phone}
                        onChangeText={handleChangeStatePhone}
                    />
                </ContainerInputs>
                
                <Button title='Atualizar' color='button' onPress={handleUpdateFecth} />
          </Content>
      </ContainerMain>
    </SafeAreaProvider>

  )
}
