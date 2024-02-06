import axios, { type AxiosInstance } from 'axios'

export const useApi = (): AxiosInstance => {
  const baseURL = 'https://rickandmortyapi.com/api'

  return axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
