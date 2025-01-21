import { IDefaultResponseDTO } from "dtos/IDefaultResponseDTO"

export interface IAddressDTO {
    id: number
    cep: string
    street: string
    number: string
    complement: string | null
    district: string
    city: string
    state: string
    country: string
    userId: number | null
    companyId: number | null
}

export interface IResponseGetAddress extends IDefaultResponseDTO {
    address: IAddressDTO | null
}