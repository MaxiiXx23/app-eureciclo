import { useState } from 'react'

import { ToastAndroid } from 'react-native'

import { useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { Barcode } from 'phosphor-react-native'

import { ContainerMain } from 'components/templates/Container/styles'
import { ContainerInputs, Content } from './styles'
import { CollectStackParamList } from 'shared/routes/stacksParamsList'
import { SubHeader } from 'components/molecules/SubHeader'
import { InputIcon } from 'components/atoms/InputIcon'
import { Button } from 'components/atoms/Button'
import { CollectsAPIs } from 'apis/collects'

type NavProps = NativeStackNavigationProp<CollectStackParamList, 'Initial'>

export function ConfirmCollectScreem() {

    const [code, setCode] = useState<string>('')

    const { params } = useRoute()
    const navigation = useNavigation<NavProps>()
    const showToast = (text: string) => {
        ToastAndroid.show(text, ToastAndroid.SHORT);
    }
    
    async function handleConfirmFecth () {
        try {
            if(!code) {
                return showToast('Informações não preenchidas corretamente.')
            }
    
            await CollectsAPIs.patchConfirmCollect(params!.id, code)
            navigation.navigate('Initial')
        } catch(error) {

            return showToast('Erro ao confirmar coleta! Por favor, tente novamente.')
        }
    }

    function handleFormatInput(e: string) {
        setCode(e.toLocaleUpperCase())
    }

  return (
    <SafeAreaProvider>
      <ContainerMain>
          <Content>
                <SubHeader
                    title='Código para coleta' 
                    description='Insira o código informado pelo cliente e confirme a coleta.'
                />
                <ContainerInputs>
                    <InputIcon 
                        icon={<Barcode color='#4ADE80' size={28} />} 
                        label='Código' 
                        color='primary'
                        defaultValue={code}
                        onChangeText={handleFormatInput}
                        maxLength={6}
                        
                    />
                </ContainerInputs>
                
                <Button title='Confirmar' color='primary' onPress={handleConfirmFecth} />
          </Content>
      </ContainerMain>
    </SafeAreaProvider>

  )
}
