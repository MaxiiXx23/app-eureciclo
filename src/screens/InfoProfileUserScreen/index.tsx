import { useEffect, useState } from 'react'

import { ToastAndroid } from 'react-native'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useRoute } from '@react-navigation/native'

import { UsersAPIs } from 'apis/users'

import { CalendarBlank, Envelope, House, Info, Phone } from 'phosphor-react-native'

import { ContainerMain } from 'components/templates/Container/styles'
import { Content, HeaderLabel, HeaderTitle, Label, WrapperLabel } from './styles'
import { InfoProfileByUser } from 'components/organisms/InfoProfileByUser'

import { IGetInfoUserDTO } from 'dtos/user'
import { AxiosError } from 'axios'

export function InfoProfileUserScreen() {

    const { params } = useRoute()
    const showToast = (text: string) => {
      ToastAndroid.show(text, ToastAndroid.SHORT);
    }

    const [data, setData] = useState<IGetInfoUserDTO>({} as IGetInfoUserDTO)

    async function fetch() {
        try {
            const response = await UsersAPIs.getGetInfoUserById(params!.id)
        
            setData(response.data.user)
        } catch (error) {
            if (error instanceof AxiosError) {
              return showToast(error.response?.data.messsage)
            }
            
            return showToast("Erro ao buscar dados! Por Favor, tente novamente.")
        }
    }

    useEffect(() => {
        fetch()
    }, [])

  return (
    <SafeAreaProvider>
      <ContainerMain>
          <Content>
                <InfoProfileByUser data={data} />

                <WrapperLabel>
                        <HeaderLabel>
                        <Envelope size={24} color='#4ADE80' />
                        <HeaderTitle>E-mail</HeaderTitle>
                        </HeaderLabel>
                        <Label>{data.email}</Label>
                </WrapperLabel>

                <WrapperLabel>
                        <HeaderLabel>
                        <Phone size={24} color='#4ADE80' />
                        <HeaderTitle>Telefone</HeaderTitle>
                        </HeaderLabel>
                        <Label>{data.phone}</Label>
                </WrapperLabel>

                <WrapperLabel>
                        <HeaderLabel>
                        <Info size={24} color='#4ADE80' />
                        <HeaderTitle>Descrição</HeaderTitle>
                        </HeaderLabel>
                        <Label>{data.description}</Label>
                </WrapperLabel>

                <WrapperLabel>
                        <HeaderLabel>
                        <CalendarBlank size={24} color='#4ADE80' />
                        <HeaderTitle>Data de nascimento</HeaderTitle>
                        </HeaderLabel>
                        <Label>{data.dateOfBirth}</Label>
                </WrapperLabel>

                {data.address && (
                    <WrapperLabel>
                        <HeaderLabel>
                        <House size={24} color='#4ADE80' />
                        <HeaderTitle>Endereço</HeaderTitle>
                        </HeaderLabel>
                        <Label>{data.address.street}, n° {data.address.number} - {data.address.district}</Label>
                        <Label>{data.address.city} - {data.address.state}</Label>
                  </WrapperLabel>
                )}
          </Content>
      </ContainerMain>
    </SafeAreaProvider>

  )
}
