import { IDefaultResponsePaginationDTO } from "dtos/IDefaultResponseDTO"

export interface IGetListCollectsByUserDTO {
    id: number
    createdAt: string
    status: {
      id: number
      name: string
    }
}

export interface IGetInfoCollectDTO {
  id: number
  description: string
  code: string
  collectedAt: string | null
  receivedAt: string | null
  createdAt: string
  user: {
    id: number
    name: string
    rating: number
  }
  status: {
    id: number
    name: string
    color: string
  }
  image: {
    id: number
    url: string
  }
  addresses: {
    id: number
    cep: string
    street: string
    number: string
    complement: string
    district: string
    city: string
    state: string
    country: string
  }
  collector: {
    id: number
    name: string
    rating: number
    createdAt: string
  } | null
}

export interface IResponseGetListCollectsByUserDTO extends IDefaultResponsePaginationDTO {
    collects: IGetListCollectsByUserDTO[]
}

export interface IResponseGetInfoCollectDTO {
  collect: IGetInfoCollectDTO
}
