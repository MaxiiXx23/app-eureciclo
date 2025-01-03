interface INewsDTO {
    id: number,
    title: string
    btnText: string
    urlImage: string
}

interface IResponseFetchCEP {
    bairro: string
    localidade: string
    logradouro: string
    uf: string
}

export { INewsDTO, IResponseFetchCEP }