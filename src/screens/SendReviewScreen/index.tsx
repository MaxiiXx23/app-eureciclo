import { useState } from 'react'

import { ToastAndroid } from 'react-native'

import { useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { ChatCenteredDots } from 'phosphor-react-native'

import { ContainerMain } from 'components/templates/Container/styles'
import { ContainerInputs, Content } from './styles'
import { CollectStackParamList } from 'shared/routes/stacksParamsList'
import { SubHeader } from 'components/molecules/SubHeader'
import { InputIcon } from 'components/atoms/InputIcon'
import { Button } from 'components/atoms/Button'
import { StarRating } from 'components/organisms/StarRating'
import { ReviewAPIs } from 'apis/review'

type NavProps = NativeStackNavigationProp<CollectStackParamList, 'Initial'>

export function SendReviewScreen() {

    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState<string>('')

    const { params } = useRoute()
    const navigation = useNavigation<NavProps>()
    const showToast = (text: string) => {
        ToastAndroid.show(text, ToastAndroid.SHORT);
    }
    
    async function handleSendReviewFecth () {
        try {
            if(rating === 0) {
                return showToast('Avaliação não selecionada! Por favor, selecione-a.')
            }
    
            const response = await ReviewAPIs.create({
                rating,
                comment,
                collectId: params!.id,
                reviewedUserId: params!.reviewedUserId

            })
            showToast(response.data.message)
            navigation.goBack()
        } catch(error) {

            return showToast('Erro ao enviar avaliação! Por favor, tente novamente.')
        }
    }

  return (
    <SafeAreaProvider>
      <ContainerMain>
          <Content>
                <SubHeader
                    title='Avalie' 
                    description='Avalie a pessoa no momento da coleta.'
                />
                <ContainerInputs>
                    <StarRating onRate={setRating} />
                    <InputIcon 
                        icon={<ChatCenteredDots color='#4ADE80' size={28} />} 
                        label='Comentário' 
                        color='primary'
                        placeholder='Deixe um comentário (opcional)'
                        defaultValue={comment}
                        onChangeText={setComment}
                        maxLength={300}
                        
                    />
                </ContainerInputs>
                
                <Button title='Confirmar' color='primary' onPress={handleSendReviewFecth} />
          </Content>
      </ContainerMain>
    </SafeAreaProvider>

  )
}
