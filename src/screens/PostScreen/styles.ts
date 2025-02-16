import { Image, ScrollView, Text, View} from 'react-native'
import styled from 'styled-components'

export const Content = styled(ScrollView)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.shape};
  paddingRight:  ${({theme}) => theme.spacing[4]};
  paddingLeft:  ${({theme}) => theme.spacing[4]};
  paddingTop:  ${({theme}) => theme.spacing[3]};
  paddingBottom:  ${({theme}) => theme.spacing[3]};

  gap: ${({theme}) => theme.spacing[5]};

  border-top-right-radius: ${({theme}) => theme.spacing[6]};
  border-top-left-radius: ${({theme}) => theme.spacing[6]};
`

export const Container = styled(View)`
  margin-bottom: 20px;
`;

export const Header = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const UserContainer = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled(Image)`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 10px;
`;

export const Username = styled(Text)`
  font-weight: bold;
  font-size: 14px;
`;

export const PostImage = styled(Image)`
  width: 100%;
  height: 400px;
`;

export const Actions = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;

export const ActionButtons = styled(View)`
  flex-direction: row;
  gap: 15px;
`;

export const Likes = styled(Text)`
  font-weight: bold;
  padding: 5px 10px;
`;

export const Description = styled(Text)`
  padding: 5px 10px;
`;

export const Comments = styled(Text)`
  padding: 5px 10px;
  color: gray;
`;

export const PostDate = styled(Text)`
  padding: 5px 10px;
  color: gray;
  font-size: 12px;
`;