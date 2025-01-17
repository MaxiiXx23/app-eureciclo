import { IResponseGetInfoCompany, TResponseListCompaniesDTO } from "dtos/companies"
import { IRequestPagination } from "interfaces"
import { api } from "lib/axios"

const baseUrl = 'company'

async function getSearchCompaniesToCollector({
    page,
    perPage,
    search = '',
  }: IRequestPagination) {
  
    const response = await api.get<TResponseListCompaniesDTO>(`${baseUrl}/list/search`, {
      params: {
          search, 
          page,
          perPage,
      },
    })
  
    return response
}

async function getInfoProfile(id: number) {

  const response = await api.get<IResponseGetInfoCompany>(`${baseUrl}/info-profile`, {
    params: {
        id
    },
  })

  return response
}

export const CompaniesAPIs = {
    getSearchCompaniesToCollector,
    getInfoProfile
}