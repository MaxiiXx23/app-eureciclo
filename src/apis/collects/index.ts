import { api } from 'lib/axios'

import { IRequestPagination } from 'interfaces'
import { IResponseGetInfoCollectDTO, IResponseGetListCollectsByUserDTO } from 'dtos/collects'

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

export const CollectsAPIs = {
    getCollectsByUser,
    getInProgressByUserId,
    getCollectById
}
