import { IDefaultResponsePaginationDTO } from "dtos/IDefaultResponseDTO"

export interface IGetItemListNotificationDTO {
    id: number
    data: {
      title: string
      description: string
      code: string
      type: number
      alreadyUsed: boolean
    }
    createdAt: string
    user: {
      id: number
      name: string
      urlImage: string
    }
    company: {
      id: number
      name: string
      urlImage: string
    } | null
  }

export interface IResponseGetListNotificationsDTO extends IDefaultResponsePaginationDTO {
    notifications: IGetItemListNotificationDTO[]
}