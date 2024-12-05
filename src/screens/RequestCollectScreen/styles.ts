import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styled from 'styled-components/native'


export const TitleHeader = styled(Text)`
  fontSize: ${({theme}) => theme.spacing[5]};
  color: ${({theme}) => theme.colors.shape};
`

export const Content = styled(View)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.shape};
  paddingRight:  ${({theme}) => theme.spacing[3]};
  paddingLeft:  ${({theme}) => theme.spacing[3]};
  paddingTop:  ${({theme}) => theme.spacing[3]};
  paddingBottom:  ${({theme}) => theme.spacing[3]};

  gap: ${({theme}) => theme.spacing[10]};

  border-top-right-radius: ${({theme}) => theme.spacing[6]};
  border-top-left-radius: ${({theme}) => theme.spacing[6]};
`

export const ContainerInput = styled(View)`
  justify-content: start;
  align-items: center;
  width: 100%;
  gap: ${({theme}) => theme.spacing[2]};
`

export const LabelInput = styled(Text)`
  font-weight: bold;
  font-size: ${({ theme }) => theme.spacing[5]};
  color: ${({ theme }) => theme.colors.textDark};
`
export const HeaderInput = styled(View)`
  width: 100%;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  gap: ${({ theme }) => theme.spacing[3]};
`

export const WrapperTitleInput = styled(View)`
  flex-direction: row;
  justify-content: start;
  align-items: start;
  gap: ${({ theme }) => theme.spacing[3]};
`

export const Header = styled(View)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const TextArea = styled(TextInput)`
  width: 100%;
  height: ${({ theme }) => theme.spacing[10]};
  border-width: 1px;
  border-radius: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[3]};

  font-size: ${({ theme }) => theme.spacing[4]};
  color: ${({ theme }) => theme.colors.textDark};

  justify-content: center;
  align-items: start;
`

export const TextAddress = styled(Text)`
  font-size: ${({ theme }) => theme.spacing[4]};
  color: ${({ theme }) => theme.colors.textDark};
`

export const ButtonAddress = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.spacing[32]};
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.attention};
  padding: ${({ theme }) => theme.spacing[2]};
`

export const BtnTitle = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${({ theme }) => theme.spacing[4]};
  text-transform: uppercase;
  font-weight: bold;
`