import { useContext, useEffect, useState } from 'react'

import { ToastAndroid } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { AuthContext } from 'contexts/AuthContext'
import { CompaniesAPIs } from 'apis/companies'
import { normalizePhoneNumber } from 'utils/masks'

import { PencilSimpleLine } from 'phosphor-react-native'

import { ContainerMain } from 'components/templates/Container/styles'
import { ContainerNavs, Content, Title, WrapperLabel } from './styles'
import { InputIcon } from 'components/atoms/InputIcon'
import { SelectImagePicker } from 'components/molecules/SelectImagePicker'
import { Button } from 'components/atoms/Button'
import { ButtonArrow } from 'components/atoms/ButtonArrow'

import { IInfoProfileCompanyDTO } from 'dtos/companies'
import { AdminCompanyStackParamList } from 'shared/routes/stacksParamsList'
import { AxiosError } from 'axios'

type NavProps = NativeStackNavigationProp<AdminCompanyStackParamList, 'AdminInitial'>

export function ProfileAdminCompanyScreen() {
  const [data, setData] = useState<IInfoProfileCompanyDTO>({} as IInfoProfileCompanyDTO)
  const [email, setEmail] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [fantasyName, setFantasyName] = useState<string>('')
  const [corporateReason, setCorporateReason] = useState<string>('')
  const [description, setDescription] = useState<string>('')

  const showToast = (text: string) => {
    ToastAndroid.show(text, ToastAndroid.SHORT);
  }

  const { userAuth } = useContext(AuthContext)

  const navigation = useNavigation<NavProps>()

  async function fetchLoadData() {
    try {
        const { data } = await CompaniesAPIs.getInfoProfile(userAuth.businesses!.id)
        setFantasyName(data.company.fantasyName)
        setCorporateReason(data.company.corporateReason)
        setEmail(data.company.email)
        setPhone(data.company.phone)
        setDescription(data.company.description)

        setData(data.company)
    } catch (error) {
        if (error instanceof AxiosError) {
            return showToast(error.response?.data.messsage)
        }
        
        return showToast("Erro ao buscar dados! Por Favor, tente novamente.")
    }
  }

  async function handleUpdate() {
    try {

        if(!email || !fantasyName || !corporateReason) {
            return showToast('Algum campo não foi preenchido corretamente! Por favor, preencha-o.')
        }

        await CompaniesAPIs.updateInfos({
            id: userAuth.businesses!.id,
            email,
            fantasyName,
            corporateReason,
            description,
            phone,
        })
        return showToast('Informações atualizadas com sucesso!')
    } catch (error) {
        if (error instanceof AxiosError) {
            return showToast(error.response?.data.messsage)
        }
        
        return showToast("Erro ao atualizar dados! Por Favor, tente novamente.")
    }
  }

  function handleChangeStatePhone(e: string) {
    const value = normalizePhoneNumber(e)
        setPhone(value) 
  }

  function updateImageFromState(url: string) {
    setData({
        ...data,
        urlImage: url
    })
  }

  function handleNavAdress() {
    navigation.navigate('Address', {
        id: userAuth.businesses!.id,
        type: 2
    })
  }

  useEffect(() => {
    fetchLoadData()
  }, [])

  return (
    <SafeAreaProvider>
      <ContainerMain>
          <Content>
                <SelectImagePicker
                    urlImage={data.urlImage} 
                    isUser={false} 
                    companyId={userAuth.businesses!.id}
                    updateImageFromState={updateImageFromState}
                />
                <ButtonArrow title='Atualizar Endereço' onPress={handleNavAdress} />
                <ContainerNavs>
                    <Title>Informações</Title>
                    <WrapperLabel>
                        <InputIcon 
                            icon={<PencilSimpleLine color='#4ADE80' size={28} />} 
                            label='Nome Fantasia' 
                            color='primary'
                            defaultValue={data.fantasyName}
                            value={fantasyName}
                            onChangeText={setFantasyName}
                        />
                    </WrapperLabel>
                    <WrapperLabel>
                        <InputIcon 
                            icon={<PencilSimpleLine color='#4ADE80' size={28} />} 
                            label='Razão Social' 
                            color='primary'
                            defaultValue={data.corporateReason}
                            value={corporateReason}
                            onChangeText={setCorporateReason}
                        />
                    </WrapperLabel>
                    <WrapperLabel>
                        <InputIcon 
                            icon={<PencilSimpleLine color='#4ADE80' size={28} />} 
                            label='E-mail' 
                            color='primary'
                            keyboardType='email-address'
                            defaultValue={data.email}
                            value={email}
                            onChangeText={setEmail}
                        />
                    </WrapperLabel>
                    <WrapperLabel>
                        <InputIcon 
                            icon={<PencilSimpleLine color='#4ADE80' size={28} />} 
                            label='Descrição' 
                            color='primary'
                            defaultValue={data.description}
                            value={description}
                            onChangeText={setDescription}
                        />
                    </WrapperLabel>
                    <WrapperLabel>
                        <InputIcon 
                            icon={<PencilSimpleLine color='#4ADE80' size={28} />} 
                            label='Telefone' 
                            color='primary'
                            keyboardType="numeric"
                            maxLength={15}
                            defaultValue={data.phone}
                            value={phone}
                            onChangeText={handleChangeStatePhone}
                        />
                    </WrapperLabel>
                </ContainerNavs>
                <Button title='Atualizar' color='button' onPress={handleUpdate} />
          </Content>
          
      </ContainerMain>
    </SafeAreaProvider>

  )
}
