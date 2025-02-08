import { IDefaultResponseDTO, IDefaultResponsePaginationDTO } from "dtos/IDefaultResponseDTO"

export interface IGetItemListCollectorDTO {
    id: number
    name: string
    urlImage: string
    rating: number
}

export interface IGetInfoUserDTO {
  id: number
  email: string
  name: string
  description: string
  phone: string | null
  dateOfBirth: string
  urlImage: string
  rating: number
  address: {
    id: number
    cep: string
    street: string
    number: string
    complement: string | null
    district: string
    city: string
    state: string
    country: string
  } | null
}
  

export interface IResponseGetListCollectorDTO extends IDefaultResponsePaginationDTO {
    collectors: IGetItemListCollectorDTO[]
}

export interface IResponseGetInfoUserDTO extends IDefaultResponseDTO {
  user: IGetInfoUserDTO
}

export interface IResponseUploadImageProfileDTO extends IDefaultResponseDTO {
  urlImage: string
}