export interface IRequestLogin {
    email: string
    password: string
  }
  
  export interface IRequestRegister {
    email: string
    password: string
    fullName: string
    phone: string
  }
  
  export interface IRequestRegisterStorage {
    email: string
    confirmPassword: string
    password: string
    fullName: string
    phone: string
  }
  