export interface INewsDTO {
    id: number,
    title: string
    btnText: string
    urlImage: string
}

export interface IResponseFetchCEP {
    bairro: string
    localidade: string
    logradouro: string
    uf: string
}

export interface IOrdernation {
    ordernation: 'asc' | 'desc'
  }
  
  export interface IQueryType {
    type: 'all' | 'spec'
  }
  
  export interface IPeriodQuery {
    from?: string
    to?: string
  }

  export interface IRequestPagination {
    id?: number
    page: number
    perPage: number
    search?: string
    status: number
    ordernation: IOrdernation['ordernation']
    type?: IQueryType['type']
    period?: IPeriodQuery
  }

  export interface IRequestPaginationDefault {
    page: number
    perPage: number
  }

  export interface IRequestPaginationMultipleStatus extends Omit<IRequestPagination, 'status'> {
    status: string
  }