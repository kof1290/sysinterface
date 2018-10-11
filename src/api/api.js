import axios from 'axios'

export const login = params => {
  return axios.get('../../static/test.json', {params: params})
}
