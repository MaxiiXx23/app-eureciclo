import { AxiosResponse } from 'axios'

import { api } from 'lib/axios'

import { IResponseLoginDTO, IResponseRefreshTokenDTO } from 'dtos/auth'
import { IDefaultResponseDTO } from 'dtos/IDefaultResponseDTO'
import { IRequestCreateUserAndCompany, IRequestLogin, IRequestRegister } from 'interfaces/auth'

const baseUrl = 'auth'

async function login({ email, password }: IRequestLogin) {
  const response = await api.post<IResponseLoginDTO>(`${baseUrl}/login`, {
    email,
    password,
  })

  return response.data
}

async function validateRefreshToken(refreshToken: string) {
  const response: AxiosResponse<IResponseRefreshTokenDTO> = await api.get(
    `${baseUrl}/refresh-token`,
    {
      params: {
        tk: refreshToken,
      },
    },
  )

  return response.data.accessToken
}

async function logout(refreshToken: string) {
  const response: AxiosResponse<IDefaultResponseDTO> = await api.get(
    `/auth/logout`,
    {
      params: {
        tk: refreshToken,
      },
    },
  )
  return response.data
}

async function registerUser({
  email,
  password,
  fullName,
  phone,
  DateOfBirth,
  docIdentification,
  typeUserId,
}: IRequestRegister) {
  const response = await api.post<IResponseLoginDTO>(
    `${baseUrl}/register`,
    {
      email,
      password,
      fullName,
      phone,
      DateOfBirth,
      docIdentification,
      typeUserId,
    },
  )

  return response.data
}

async function registerUserAndCompany({
  user,
  company
}: IRequestCreateUserAndCompany) {
  const response = await api.post<IResponseLoginDTO>(
    `${baseUrl}/register-company`,
    {
      user,
      company
    },
  )

  return response.data
}

export const AuthAPIs = {
  login,
  validateRefreshToken,
  logout,
  registerUser,
  registerUserAndCompany
}
