import {
  ReactNode,
  useContext,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react'

import { UsersAPIs } from 'apis/users'

import { IRequestPagination } from 'interfaces'
import { IResponseGetListCollectorDTO } from 'dtos/user'

type Props = {
  children: ReactNode
}
interface IContextProps {
  currentPage: number
  handlePageChange: (page: number, totalPage: number) => void
  setCurrentPage: Dispatch<SetStateAction<number>>
  getSearchCollectorsToCompany({ search, page, perPage, status, ordernation, period, type, }: IRequestPagination): Promise<IResponseGetListCollectorDTO | undefined>
}

const UsersContext = createContext({} as IContextProps)

export function UsersProvider({ children }: Props) {

  const [currentPage, setCurrentPage] = useState<number>(1)

  const handlePageChange = (page: number, totalPage: number) => {
    if (page < 1 || page > totalPage) return
    setCurrentPage(page)
  }

  async function getSearchCollectorsToCompany({
    search,
    page,
    perPage,
    status,
    ordernation,
    period,
    type,
  }: IRequestPagination) {
    const response = await UsersAPIs.getSearchCollectorsToCompany({
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
  }


  return (
    <UsersContext.Provider
      value={{
        getSearchCollectorsToCompany,
        currentPage,
        handlePageChange,
        setCurrentPage,
      }}
    >
      {children}
    </UsersContext.Provider>
  )
}

export const useUsers = () => {
  const context = useContext(UsersContext)

  return context
}
