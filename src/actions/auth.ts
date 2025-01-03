import AsyncStorage from '@react-native-async-storage/async-storage'

interface IData {
  token: string
  refreshToken: string
}

export async function createCoockies(data: IData) {

    const tokenValue = JSON.stringify(data.token);
    const refreshTokenValue = JSON.stringify(data.refreshToken);

    await AsyncStorage.setItem('@EuReciclo:token', tokenValue);
    await AsyncStorage.setItem('@EuReciclo:refreshToken', refreshTokenValue);

}

export async function createCoockieToken(data: Omit<IData, 'refreshToken'>) {
  await AsyncStorage.removeItem('@EuReciclo:token')

  const tokenValue = JSON.stringify(data.token);
  await AsyncStorage.setItem('@EuReciclo:token', tokenValue);
}

export async function getCoockieRefreshToken() {
  const jsonValue = await AsyncStorage.getItem('@EuReciclo:refreshToken');

  return jsonValue != null ? JSON.parse(jsonValue) : null;
}

export async function getCoockieToken() {
    const jsonValue = await AsyncStorage.getItem('@EuReciclo:token');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
}

export async function deleteCoockies() {
    await AsyncStorage.removeItem('@EuReciclo:token')
    await AsyncStorage.removeItem('@EuReciclo:refreshToken')
}
