import { IResponseGetInfoCompany, TResponseListCompaniesDTO } from "dtos/companies"
import { IDefaultResponseDTO } from "dtos/IDefaultResponseDTO"
import { IResponseUploadImageProfileDTO } from "dtos/user"
import { IRequestPagination } from "interfaces"
import { IRequestUpdateInfosCompany, IRequestUploadImageProfileCompany } from "interfaces/company/request"
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

async function updateInfos({
  id,
  email,
  corporateReason,
  description,
  phone,
}: IRequestUpdateInfosCompany) {

  const response = await api.put<IDefaultResponseDTO>(`${baseUrl}/update/infos?id=${id}`, {
    email,
    corporateReason,
    description,
    phone,
  })

  return response
}

async function uploadImageProfileCompany(data: IRequestUploadImageProfileCompany) {
  const response = await api.post<IResponseUploadImageProfileDTO>(`${baseUrl}/upload/profile?id=${data.id}`, data.form, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })

  return response
}

export const CompaniesAPIs = {
    getSearchCompaniesToCollector,
    getInfoProfile,
    updateInfos,
    uploadImageProfileCompany
}