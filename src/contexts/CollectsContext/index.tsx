import {
  ReactNode,
  useContext,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react'

import { AxiosError } from 'axios'
import { IRequestPagination, IRequestPaginationMultipleStatus } from 'interfaces'
import { IResponseGetListCollectsByUserDTO } from 'dtos/collects'
import { CollectsAPIs } from 'apis/collects'
import { CompaniesAPIs } from 'apis/companies'
import { TResponseListCompaniesDTO } from 'dtos/companies'

type Props = {
  children: ReactNode
}
interface IContextProps {
  currentPage: number
  handlePageChange: (page: number, totalPage: number) => void
  getCollectsPaginated: (request: IRequestPagination
  ) => Promise<IResponseGetListCollectsByUserDTO | undefined>
  getCollectsPaginatedByCollector: (request: IRequestPaginationMultipleStatus
  ) => Promise<IResponseGetListCollectsByUserDTO | undefined>
  getCollectsToCollector: (request: IRequestPagination
  ) => Promise<IResponseGetListCollectsByUserDTO | undefined>
  setCurrentPage: Dispatch<SetStateAction<number>>
  getSearchCompaniesToCollector(data: IRequestPagination): Promise<TResponseListCompaniesDTO | undefined>
}

const CollectsContext = createContext({} as IContextProps)

export function CollectsProvider({ children }: Props) {

  const [currentPage, setCurrentPage] = useState<number>(1)

  const handlePageChange = (page: number, totalPage: number) => {
    if (page < 1 || page > totalPage) return
    setCurrentPage(page)
  }

  async function getCollectsPaginated({
    search,
    page,
    perPage,
    status,
    ordernation,
    period,
    type,
  }: IRequestPagination) {
    try {

      const response = await CollectsAPIs.getCollectsByUser({
        search,
        page,
        perPage,
        ordernation,
        status,
        type,
        period,
      })
      
      setCurrentPage(response.data.currentPage)
      return response.data
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(
            'Por favor, tente novamente recarregando a página.')
        return
      }

      console.log('Por favor, tente novamente recarregando a página.')
    }
  }

  async function getCollectsPaginatedByCollector({
    id,
    search,
    page,
    perPage,
    status,
    ordernation,
    period,
    type,
  }: IRequestPaginationMultipleStatus) {
    try {

      const response = await CollectsAPIs.getCollectsInProcessByCollector({
        id,
        search,
        page,
        perPage,
        ordernation,
        status,
        type,
        period,
      })
      
      setCurrentPage(response.data.currentPage)
      return response.data
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(
            'Por favor, tente novamente recarregando a página.')
        return
      }

      console.log('Por favor, tente novamente recarregando a página.')
    }
  }

  async function getCollectsToCollector({
    search,
    page,
    perPage,
    status,
    ordernation,
    period,
    type,
  }: IRequestPagination) {
    try {

      const response = await CollectsAPIs.getCollectsToCollector({
        search,
        page,
        perPage,
        ordernation,
        status,
        type,
        period,
      })
      
      setCurrentPage(response.data.currentPage)
      return response.data
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(
            'Por favor, tente novamente recarregando a página.')
        return
      }

      console.log('Por favor, tente novamente recarregando a página.')
    }
  }

  async function getSearchCompaniesToCollector({
    search,
    page,
    perPage,
    status,
    ordernation,
    period,
    type,
  }: IRequestPagination) {
    try {

      const response = await CompaniesAPIs.getSearchCompaniesToCollector({
        search,
        page,
        perPage,
        ordernation,
        status,
        type,
        period,
      })
      
      setCurrentPage(response.data.currentPage)
      return response.data
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(
            'Por favor, tente novamente recarregando a página.')
        return
      }

      console.log('Por favor, tente novamente recarregando a página.')
    }
  }


  return (
    <CollectsContext.Provider
      value={{
        getCollectsPaginated,
        getCollectsToCollector,
        getCollectsPaginatedByCollector,
        getSearchCompaniesToCollector,
        currentPage,
        handlePageChange,
        setCurrentPage,
      }}
    >
      {children}
    </CollectsContext.Provider>
  )
}

export const useCollects = () => {
  const context = useContext(CollectsContext)

  return context
}
