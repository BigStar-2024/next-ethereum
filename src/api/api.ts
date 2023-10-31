import api from "./axios"
import { SearchResponse } from "../configs/PairType"

export const searchCoins = async (query: string): Promise<SearchResponse> => {

    const response = await api.get<SearchResponse>('search', {
        params: {
            q: query
        }
    })

    return response.data
}
