export interface IRequestUpdateInfosCompany {
    id: number
    description: string
    fantasyName: string
    corporateReason: string
    phone: string
    email: string
}

export interface IRequestUploadImageProfileCompany {
  id: number
  form: FormData
}