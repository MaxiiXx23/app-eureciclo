export interface IAuthUserDTO {
    id: number
    email: string
    firstName: string
    lastName: string
    status: boolean
    typeUserId: number
    businesses: {
      id: number
      createdAt: Date
    } | null
  }
  
  export interface IResponseLoginDTO {
    token: string
    refreshToken: string
    message: string
  }
  
  export interface IResponseRefreshTokenDTO {
    accessToken: string
  }
  