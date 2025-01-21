export interface IRequestCreateAddress {
    cep: string
    street: string
    number: string
    complement: string
    district: string
    city: string
    state: string
    country: string
    userId?: number
    companyId?: number
  }
  
  export interface IRequestUpdateAddress {
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