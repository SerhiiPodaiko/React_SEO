import axios from 'axios'

const _baseUrl = 'https://jsonplaceholder.typicode.com/'

const API = axios.create({
    baseURL: `${(_baseUrl || '').replace(/\/$/, '')}`,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default API