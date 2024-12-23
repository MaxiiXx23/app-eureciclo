import { useEffect, useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, ControllerRenderProps, SubmitHandler, useForm } from 'react-hook-form'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useTheme } from 'styled-components'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { normalizeCreditCardInput, normalizeExpirationCard } from 'utils/masks'

import { Calendar, CreditCard, IdentificationCard, } from 'phosphor-react-native'

import { ContainerMain } from 'components/templates/Container/styles'
import { RegisterBusinessStackParamList } from 'shared/routes/stacksParamsList'
import { BtnMethod, ContainerMethods, Content, Description, Form, Header, LabelMethod, Title, TitleBtnMethod, WrapperBtnsMethods } from './styles'
import { InputIcon } from 'components/atoms/InputIcon'
import { Button } from 'components/atoms/Button'

import { checkoutCardSchema, formTypeCheckoutCardSchema } from 'schemas/checkout/checkoutCardSchema'


type NavProps = NativeStackNavigationProp<RegisterBusinessStackParamList>

export function CheckoutPaymentScreen() {

  const [typeCard, setTypeCard] = useState<number>()

  const theme = useTheme()
  const navigation = useNavigation<NavProps>()

  const { register, setValue, control, handleSubmit} = useForm<formTypeCheckoutCardSchema>({
      resolver: zodResolver(checkoutCardSchema),
  })

  const onSubmit: SubmitHandler<formTypeCheckoutCardSchema> = async (data) => {

    try {
      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem('@EuReciclo:registerBusiness', jsonValue);

      console.log("Informações validadas e cadastro finalizado!")
      console.log(`Tipo de cartão selecionado: ${typeCard}`)
    } catch (e) {
      // saving error
      console.log("Erro ao salvar!")
    }

  }

  function handleChangeInputNumberCard(
    e: string,
    field: ControllerRenderProps<formTypeCheckoutCardSchema>,
    ) {
    const value = normalizeCreditCardInput(e)
    field.onChange(value)
  }

  function handleChangeInputExpiration(
    e: string,
    field: ControllerRenderProps<formTypeCheckoutCardSchema>,
    ) {
    const value = normalizeExpirationCard(e)
    field.onChange(value)
  }

  function handleSelectTypeCard(option: number) {
    setTypeCard(option)
  }

    useEffect(() => {
      register('numberCard')
      register('expiration')
      register('cvv')
      register('nickname')
    }, [register])


  return (
    <SafeAreaProvider>
      <ContainerMain>
          <Content>

                <Header>
                    <Title>Checkout - Pagamento</Title>
                    <Description>
                        Informe os dados do cartão e forma de pagamento. 
                    </Description>
                </Header>

                <Form>

                  <Controller
                      control={control}
                      name="numberCard"
                      render={({ field }) => (

                        <InputIcon
                          icon={<CreditCard size={32} color={theme.colors.primary} />}
                          color='primary'
                          label="Número do Cartão"
                          placeholder="XXXX XXXX XXXX XXXX"
                          maxLength={19}
                          keyboardType="numeric"
                          {...field}
                          onChangeText={(text) =>
                            handleChangeInputNumberCard(text, field)
                          }
                        />

                      )}
                    />

                    <Controller
                      control={control}
                      name="expiration"
                      render={({ field }) => (

                        <InputIcon
                          icon={<Calendar size={32} color={theme.colors.primary} />}
                          color='primary'
                          label="Data de Expiração"
                          placeholder="MM/AA"
                          maxLength={5}
                          keyboardType="numeric"
                          {...field}
                          onChangeText={(text) =>
                            handleChangeInputExpiration(text, field)
                          }
                        />

                      )}
                    />

                    <InputIcon
                        icon={<CreditCard size={32} color={theme.colors.primary} />}
                        color='primary'
                        label="CVV"
                        placeholder="123"
                        keyboardType="numeric"
                        maxLength={3}
                        onChangeText={text => setValue('cvv', text)}
                    />

                    <InputIcon
                        icon={<IdentificationCard size={32} color={theme.colors.primary} />}
                        color='primary'
                        label="Apelido para o cartão (Opcional)"
                        placeholder="Digite o apelido..."
                        onChangeText={text => setValue('nickname', text)}
                    />

                    <ContainerMethods>
                      <LabelMethod>Método de pagamento</LabelMethod>
                      <WrapperBtnsMethods>
                        <BtnMethod color={typeCard === 1 ? 'primary' : 'shape'} onPress={() => handleSelectTypeCard(1)}>
                          <TitleBtnMethod>Débito</TitleBtnMethod>
                        </BtnMethod>
                        <BtnMethod color={typeCard === 2 ? 'primary' : 'shape'} onPress={() => handleSelectTypeCard(2)}>
                          <TitleBtnMethod>Crédito</TitleBtnMethod>
                        </BtnMethod>
                      </WrapperBtnsMethods>
                    </ContainerMethods>

                    <Button title="Finalizar Cadastro" color="primary" onPress={handleSubmit(onSubmit)} />
                </Form>

          </Content>
      </ContainerMain>
    </SafeAreaProvider>

  )
}
