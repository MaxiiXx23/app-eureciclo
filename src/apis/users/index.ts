import { api } from 'lib/axios'

import { IRequestPagination } from 'interfaces'
import { IResponseGetInfoUserDTO, IResponseGetListCollectorDTO } from 'dtos/user'
import { IDefaultResponseDTO } from 'dtos/IDefaultResponseDTO'
import { IRequestPatchInfoPhoneUser, IRequestUpdateInfoNameUser } from 'interfaces/user/request'
import { IResponseGetAddress } from 'dtos/address'
import { IRequestCreateAddress, IRequestUpdateAddress } from 'interfaces/address/request'

const baseUrlCollaborator = 'collaborator'
const baseUrl = 'user'
const baseUrlAddress = 'address'

async function getSearchCollectorsToCompany({
    page,
    perPage,
    search = '',
}: IRequestPagination) {

  const response = await api.get<IResponseGetListCollectorDTO>(`${baseUrlCollaborator}/list/search/collectors`, {
    params: {
        search, 
        page,
        perPage,
    },
  })

  return response
}

async function getGetInfoUserById(id: number) {

  const response = await api.get<IResponseGetInfoUserDTO>(`${baseUrlCollaborator}/info`, {
    params: {
      id,
    },
  })

  return response
}

async function updateName(
  { 
    firstName,
    lastName
  }: IRequestUpdateInfoNameUser) {

  const response = await api.put<IDefaultResponseDTO>(`${baseUrl}/update/name`, {
    firstName,
    lastName
  })

  return response
}

async function patchPhone(
  { 
    phone
  }: IRequestPatchInfoPhoneUser) {

  const response = await api.patch<IDefaultResponseDTO>(`${baseUrl}/update/phone`, {
    phone
  })

  return response
}

async function getAddressByUserId(id: number) {

  const response = await api.get<IResponseGetAddress>(`${baseUrlAddress}/info/user`, {
    params: {
      id,
    }
  })

  return response
}

async function createAddress(data: IRequestCreateAddress) {

  const response = await api.post<IDefaultResponseDTO>(`${baseUrlAddress}/`, {
    userId: data.userId,
    cep: data.cep,
    street: data.street,
    number: data.number,
    complement: data.complement,
    district: data.district,
    city: data.city,
    state: data.state,
    country: data.country,
  })

  return response
}

async function updateAddress(data: IRequestUpdateAddress) {

  const response = await api.put<IDefaultResponseDTO>(`${baseUrlAddress}/`, {
    id: data.id,
    cep: data.cep,
    street: data.street,
    number: data.number,
    complement: data.complement,
    district: data.district,
    city: data.city,
    state: data.state,
    country: data.country
  })

  return response
}

export const UsersAPIs = {
  getSearchCollectorsToCompany,
  getGetInfoUserById,
  updateName,
  patchPhone,
  getAddressByUserId,
  createAddress,
  updateAddress
}
