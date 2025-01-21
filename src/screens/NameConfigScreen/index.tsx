import { useContext, useEffect, useState } from 'react'

import { ToastAndroid } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { AuthContext } from 'contexts/AuthContext'
import { UsersAPIs } from 'apis/users'

import { PencilSimpleLine } from 'phosphor-react-native'

import { ContainerMain } from 'components/templates/Container/styles'
import { ContainerInputs, Content } from './styles'
import { ProfileStackParamList } from 'shared/routes/stacksParamsList'
import { SubHeader } from 'components/molecules/SubHeader'
import { InputIcon } from 'components/atoms/InputIcon'
import { Button } from 'components/atoms/Button'

type NavProps = NativeStackNavigationProp<ProfileStackParamList, 'ProfileInitial'>

export function NameConfigScreen() {
    const { userAuth, setUserAuth } = useContext(AuthContext)
    const [name, setName] = useState<string | undefined>()
    const [lastname, setLastname] = useState<string | undefined>()

    const navigation = useNavigation<NavProps>()
    const showToast = (text: string) => {
        ToastAndroid.show(text, ToastAndroid.SHORT);
    }
    
    async function handleUpdateFecth () {
        if(!name || !lastname) {
            return showToast('Informações não preenchidas corretamente.')
        }

        await UsersAPIs.updateName({
            firstName: name,
            lastName: lastname
        })

        setUserAuth({
            ...userAuth,
            firstName: name,
            lastName: lastname
        })
        navigation.goBack()
    }

    useEffect(() => {
        setName(userAuth.firstName)
        setLastname(userAuth.lastName)
    }, [userAuth])

  return (
    <SafeAreaProvider>
      <ContainerMain>
          <Content>
                <SubHeader
                    title='Nome' 
                    description='Este é nome que você que as pessoas irão se referir a você.'
                />
                <ContainerInputs>
                    <InputIcon 
                        icon={<PencilSimpleLine color='#4ADE80' size={28} />} 
                        label='Nome' 
                        color='primary'
                        defaultValue={name}
                        onChangeText={setName}
                    />
                    <InputIcon 
                        icon={<PencilSimpleLine color='#4ADE80' size={28} />} 
                        label='Sobrenome'
                        color='primary'
                        defaultValue={lastname}
                        onChangeText={setLastname}
                    />
                </ContainerInputs>
                
                <Button title='Atualizar' color='button' onPress={handleUpdateFecth} />
          </Content>
      </ContainerMain>
    </SafeAreaProvider>

  )
}
