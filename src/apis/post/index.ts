import { api } from 'lib/axios'

import { IRequestPaginationPost } from 'interfaces/post/requests'
import { IResponseGetListPosts, IResponseGetPost } from 'dtos/post'

const baseUrl = 'post'

async function getPostsByType({
    page,
    perPage,
    type,
}: IRequestPaginationPost) {

  const response = await api.get<IResponseGetListPosts>(`${baseUrl}/list`, {
    params: {
        page,
        perPage,
        type,
    },
  })

  return response
}

async function getPostById(id: number) {

const response = await api.get<IResponseGetPost>(`${baseUrl}`, {
  params: {
      id
  },
})

return response
}

export const PostsAPIs = {
    getPostsByType,
    getPostById
}
