import { IDefaultResponsePaginationDTO } from "dtos/IDefaultResponseDTO"

export interface IItemListCompanyDTO {
    id: number
    fantasyName: string
}

export interface IInfoProfileCompanyDTO {
    id: number
    docIdentification: string
    corporateReason: string
    fantasyName: string
    phone: string
    email: string
    description: string
    urlImage: string
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