export interface IRequestLogin {
    email: string
    password: string
  }
  
  export interface IRequestRegister {
    email: string
    password: string
    fullName: string
    phone?: string
    docIdentification: string
    DateOfBirth: string
    typeUserId?: number
    companyId?: number
  }
  
  export interface IRequestRegisterStorage {
    email: string
    confirmPassword: string
    password: string
    fullName: string
    phone: string
  }

  export interface TCreateCompany {
    docIdentification: string
    fantasyName: string
    email: string
  }
  
  export interface IRequestCreateUserAndCompany {
    user: IRequestRegister,
    company: TCreateCompany
  }