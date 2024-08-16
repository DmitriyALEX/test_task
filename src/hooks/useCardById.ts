import axios from 'axios'
import { useQuery } from 'react-query'
import { ICard } from '../types/card-interface'

const getData = async (id: string) => {
    return axios.get<ICard>(`https://api.spacexdata.com/v4/dragons/${id}`)
}

export const useCard = (id: string) => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['card', id],
        queryFn: () => getData(id),
        select: data => data.data,
    })

    return { data, isLoading, error }
}
