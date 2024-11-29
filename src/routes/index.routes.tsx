import { NavigationContainer } from '@react-navigation/native'
// import { AuthRouter } from './auth.routes'
import { HomeRouter } from './home.routes'

export function AppRouter() {
  return (
    <NavigationContainer>
      {/* <AuthRouter /> */}
      <HomeRouter />
    </NavigationContainer>
  )
}
