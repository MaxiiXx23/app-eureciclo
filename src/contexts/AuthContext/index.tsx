import React, { ReactNode, createContext, useEffect, useState } from 'react'

import { AxiosError } from 'axios'
import { jwtDecode } from 'jwt-decode'

import { IAuthUserDTO } from 'dtos/auth'
import { AuthAPIs } from 'apis/auth'
import { createCoockies, createCoockieToken, deleteCoockies, getCoockieRefreshToken } from 'actions/auth'

interface Props {
  children: ReactNode
}

interface IDataSignIn {
  email: string
  password: string
}

interface AuthContextType {
  signIn: (data: IDataSignIn) => Promise<void>
  logout: () => Promise<void>
  setUserAuth: React.Dispatch<React.SetStateAction<IAuthUserDTO>>
  userAuth: IAuthUserDTO
  loading: boolean
}

const AuthContext = createContext({} as AuthContextType)

function AuthProvider({ children }: Props) {

  const [userAuth, setUserAuth] = useState<IAuthUserDTO>({} as IAuthUserDTO)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const validateToken = async () => {
      try {
        setLoading(true)
        const storageRefreshToken = await getCoockieRefreshToken()
        if (!storageRefreshToken) {
          throw new Error('Refresh Token não encontrado')
        }

        const data = await AuthAPIs.validateRefreshToken(
          storageRefreshToken.value,
        )
        if (data) {
          const userAuthInfos = jwtDecode(data) as IAuthUserDTO
          setUserAuth({
            id: userAuthInfos.id,
            firstName: userAuthInfos.firstName,
            lastName: userAuthInfos.lastName,
            email: userAuthInfos.email,
            phone: userAuthInfos.phone,
            urlImageProfile: userAuthInfos.urlImageProfile,
            status: userAuthInfos.status,
            typeUserId: userAuthInfos.typeUserId,
            businesses: userAuthInfos.businesses,
          })

          await createCoockieToken({ token: data })

        }
      } catch (error) {

        setUserAuth({} as IAuthUserDTO)

        if (error instanceof AxiosError) {
          await deleteCoockies()

          return
        }

      } finally {
        setLoading(false)
      }
    }
    validateToken()
  }, [])

  const signIn = async (request: IDataSignIn) => {
    try {
      const data = await AuthAPIs.login(request)
      const token = data.token
      const refreshToken = data.refreshToken
      const userAuthInfos = jwtDecode(token) as IAuthUserDTO

      setUserAuth({
        id: userAuthInfos.id,
        firstName: userAuthInfos.firstName,
        lastName: userAuthInfos.lastName,
        email: userAuthInfos.email,
        phone: userAuthInfos.phone,
        urlImageProfile: userAuthInfos.urlImageProfile,
        status: userAuthInfos.status,
        typeUserId: userAuthInfos.typeUserId,
        businesses: userAuthInfos.businesses,
      })

      await createCoockies({ token, refreshToken })
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.message)
      }
    }
  }

  const logout = async () => {
    try {
      const storageRefreshToken = await getCoockieRefreshToken()

      if(!storageRefreshToken) {
        throw new Error('Refresh Token não encontrado')
      }

      await AuthAPIs.logout(storageRefreshToken)
      await deleteCoockies()
      setUserAuth({} as IAuthUserDTO)

    } catch (error) {

      console.log(error)
    }
  }

  return (
    <AuthContext.Provider
      value={{ signIn, logout, userAuth, loading, setUserAuth }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
