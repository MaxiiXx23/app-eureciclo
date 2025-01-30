import { api } from 'lib/axios'

import { IRequestPagination, IRequestPaginationMultipleStatus } from 'interfaces'
import { IResponseGetInfoCollectDTO, IResponseGetListCollectsByUserDTO } from 'dtos/collects'
import { IDefaultResponseDTO, IDefaultResponsePaginationDTO } from 'dtos/IDefaultResponseDTO'

const baseUrl = 'collect'

async function getCollectsByUser({
    page,
    perPage,
    search = '',
    ordernation,
    status,
    period,
    type = 'all',
}: IRequestPagination) {

  const response = await api.get<IResponseGetListCollectsByUserDTO>(`${baseUrl}/list/user`, {
    params: {
        search, 
        page,
        perPage,
        ordernation,
        status,
        type,
    },
  })

  return response
}

async function getCollectsToCollector({
  page,
  perPage,
  search = '',
  ordernation,
  // status,
  period,
  type = 'all',
}: IRequestPagination) {

  const response = await api.get<IResponseGetListCollectsByUserDTO>(`${baseUrl}/list/collector-search`, {
    params: {
        search, 
        page,
        perPage,
        ordernation,
        status: 4,
        type,
    },
  })

  return response
}

async function getCollectById(id: number) {
  const response = await api.get<IResponseGetInfoCollectDTO>(`${baseUrl}/info`, {
    params: {
      id
    }
  })

  return response
}

async function getInProgressByUserId() {

  const response = await api.get<IResponseGetInfoCollectDTO>(`${baseUrl}/info/in-progress`)

  return response
}

async function createInProgressByCollector(id: number) {

  const response = await api.post<IDefaultResponsePaginationDTO>(`${baseUrl}/create/in-progress?id=${id}`)

  return response
}

async function getCollectsInProcessByCollector({
  id,
  page,
  perPage,
  search = '',
  ordernation,
  status,
  period,
  type = 'all',
}: IRequestPaginationMultipleStatus) {

  const response = await api.get<IResponseGetListCollectsByUserDTO>(`${baseUrl}/list/collector-search/process`, {
    params: {
        id,
        search, 
        page,
        perPage,
        ordernation,
        status,
        type,
    },
  })

  return response
}

async function patchConfirmCollect(id: number, code: string) {

  const response = await api.patch<IDefaultResponseDTO>(`${baseUrl}/confirm-collect?id=${id}&code=${code}`)

  return response
}

async function create(form: FormData) {
console.log('olá')
const response = await api.post<IDefaultResponseDTO>(`${baseUrl}/`, form, {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
})

return response
}

export const CollectsAPIs = {
    getCollectsByUser,
    getInProgressByUserId,
    getCollectById,
    getCollectsToCollector,
    getCollectsInProcessByCollector,
    createInProgressByCollector,
    patchConfirmCollect,
    create
}
