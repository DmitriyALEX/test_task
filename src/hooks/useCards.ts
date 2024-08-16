import axios from 'axios'
import { useQuery } from 'react-query'
import { ICard } from '../types/card-interface'

const getData = async () => {
    return axios.get<ICard[]>('https://api.spacexdata.com/v4/dragons')
}

export const useCards = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['cards'],
        queryFn: getData,
        select: data => data.data,
    })

    return { data, isLoading, error }
}
