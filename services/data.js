import axios from 'axios'

export const url = 'https://my-json-server.typicode.com/ezekohon/fake-json-server/items'

export const fetchData = async () => {
  const response = await axios.get(url)
  return response.data
}
