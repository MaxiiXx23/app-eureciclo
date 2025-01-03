import { useContext } from 'react'

import { NavigationContainer } from '@react-navigation/native'

import { AuthContext } from 'contexts/AuthContext'

import { AuthRouter } from './auth.routes'
import { BottomRouter } from './bottom.routes'



export function AppRouter() {

  const { userAuth } = useContext(AuthContext)

  return (
    <NavigationContainer>
      { !userAuth.id ?  <AuthRouter /> : <BottomRouter /> }
    </NavigationContainer>
  )
}
