import { api } from 'lib/axios'

import { IRequestPagination } from 'interfaces'
import { IResponseGetListNotificationsDTO } from 'dtos/notifications'
import { IDefaultResponseDTO } from 'dtos/IDefaultResponseDTO'
import { IRequestCreateNotification } from 'interfaces/notification/request'

const baseUrl = 'notification'

async function getNotificationsByUser({
    page,
    perPage,
}: IRequestPagination) {

  const response = await api.get<IResponseGetListNotificationsDTO>(`${baseUrl}/list/user`, {
    params: {
        page,
        perPage,
    },
  })

  return response
}

async function createNotificationsReviewToUser({
  receivedByUserId,
  type,
}: IRequestCreateNotification) {

  const response = await api.post<IDefaultResponseDTO>(`${baseUrl}/`, {
    receivedByUserId,
    type,
  })

  return response
}


export const NotificationsAPIs = {
    getNotificationsByUser,
    createNotificationsReviewToUser
}
