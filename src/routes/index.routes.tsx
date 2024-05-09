import { NavigationContainer } from '@react-navigation/native'
import { AuthRouter } from './auth.routes'

export function AppRouter() {
  return (
    <NavigationContainer>
      <AuthRouter />
    </NavigationContainer>
  )
}
