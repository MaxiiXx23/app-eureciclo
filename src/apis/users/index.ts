import { api } from 'lib/axios'

import { IRequestPagination } from 'interfaces'
import { IResponseGetInfoUserDTO, IResponseGetListCollectorDTO } from 'dtos/user'

const baseUrlCollaborator = 'collaborator'

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

export const UsersAPIs = {
  getSearchCollectorsToCompany,
  getGetInfoUserById
}
