import { NavigationContainer } from '@react-navigation/native'
import { AuthRouter } from './auth.routes'
import { BottomRouter } from './bottom.routes'

export function AppRouter() {
  return (
    <NavigationContainer>
      <AuthRouter />
      {/* <BottomRouter /> */}
    </NavigationContainer>
  )
}
