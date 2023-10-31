// api/axios.ts

import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.dexscreener.io/latest/dex'
})

export default api
