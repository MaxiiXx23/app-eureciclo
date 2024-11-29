import { TouchableHighlight, View } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled(View)`
  flexDirection: row;
  height: ${({theme}) => theme.spacing[28]};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  justifyContent: space-between;
  alignItems: end;

  paddingTop: ${({ theme }) => theme.spacing[10]};
  paddingLeft: ${({ theme }) => theme.spacing[4]};
  paddingRight: ${({ theme }) => theme.spacing[4]};
`

export const ContainerBtns = styled(View)`
    flexDirection: row;
    justifyContent: center;
    alignItems: center;
    gap: ${({ theme }) => theme.spacing[4]};

`

export const BtnAction = styled(TouchableHighlight)``