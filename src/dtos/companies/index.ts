import { IDefaultResponsePaginationDTO } from "dtos/IDefaultResponseDTO"

export interface IItemListCompanyDTO {
    id: number
    fantasyName: string
}

export interface IInfoProfileCompanyDTO {
    id: number
    docIdentification: string
    fantasyName: string
    phone: string | null
    email: string | null
    description: string | null
    address: {
        id: number
        cep: string
        street: string
        number: string
        complement: string
        district: string
        city: string
        state: string
        country: string
    } | null
}

export interface TResponseListCompaniesDTO extends IDefaultResponsePaginationDTO {
    companies: IItemListCompanyDTO[]
}

export interface IResponseGetInfoCompany {
    company: IInfoProfileCompanyDTO
}