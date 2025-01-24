import { IResponseGetAddress } from "dtos/address"
import { IResponseGetInfoCompany, TResponseListCompaniesDTO } from "dtos/companies"
import { IDefaultResponseDTO } from "dtos/IDefaultResponseDTO"
import { IResponseUploadImageProfileDTO } from "dtos/user"
import { IRequestPagination } from "interfaces"
import { IRequestCreateAddress, IRequestUpdateAddress } from "interfaces/address/request"
import { IRequestUpdateInfosCompany, IRequestUploadImageProfileCompany } from "interfaces/company/request"
import { api } from "lib/axios"

const baseUrl = 'company'
const baseUrlAddress = 'address'

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

async function getAddressByCompanyId(id: number) {

  const response = await api.get<IResponseGetAddress>(`${baseUrlAddress}/info/company`, {
    params: {
      id,
    }
  })

  return response
}

async function createAddress(data: IRequestCreateAddress) {

  const response = await api.post<IDefaultResponseDTO>(`${baseUrlAddress}/`, {
    companyId: data.companyId,
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

export const CompaniesAPIs = {
    getSearchCompaniesToCollector,
    getInfoProfile,
    updateInfos,
    uploadImageProfileCompany,
    getAddressByCompanyId,
    createAddress,
    updateAddress
}