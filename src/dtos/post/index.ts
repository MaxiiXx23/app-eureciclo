import { IDefaultResponseDTO, IDefaultResponsePaginationDTO } from "dtos/IDefaultResponseDTO"

interface IGetItemPostDTO {
    id: number
    title: string
    urlImage: string
}

export interface IGetPostDTO {
    id: number
    title: string
    description: string
    createdAt: Date
    file: string
}

interface IResponseGetListPosts extends IDefaultResponsePaginationDTO {
    posts: IGetItemPostDTO[]
}

interface IResponseGetPost extends IDefaultResponseDTO {
    post: IGetPostDTO
}

export { IGetItemPostDTO, IResponseGetListPosts, IResponseGetPost }