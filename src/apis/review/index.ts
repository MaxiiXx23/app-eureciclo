import { api } from 'lib/axios'

import { IDefaultResponseDTO } from 'dtos/IDefaultResponseDTO'
import { IRequestCreateReview } from 'interfaces/review/request'

const baseUrl = 'review'


async function create(data: IRequestCreateReview) {
const response = await api.post<IDefaultResponseDTO>(`${baseUrl}/`, data)

return response
}

export const ReviewAPIs = {
    create
}
