import { ScrollView, Text, View } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled(View)`
`

export const Content = styled(View)`
  justify-content: center;
  align-items: start;
  width: 100%;
  gap: ${({theme}) => theme.spacing[1]};
`
export const WrapperLabel = styled(View)`
  justify-content: center;
  align-items: start;
  width: 100%;
  gap: ${({theme}) => theme.spacing[1]};
`

export const HeaderLabel = styled(View)`
  flex-direction: row;
  gap: ${({theme}) => theme.spacing[2]};
  justify-content: start;
  align-items: center;
`

export const HeaderTitle = styled(Text)`
  font-size: ${({theme}) => theme.spacing[5]};
  color: ${({theme}) => theme.colors.textDark};
  font-weight: bold;

`
export const HeaderTitleLabel = styled(Text)`
  font-size: ${({theme}) => theme.spacing[5]};
  color: ${({theme}) => theme.colors.textDark};
  font-weight: bold;

`

export const Label = styled(Text)`
  font-size: ${({theme}) => theme.spacing[4]};
  color: ${({theme}) => theme.colors.textDark};

`