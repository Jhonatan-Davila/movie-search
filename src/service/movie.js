import Axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/movie/550';
const API_KEY = 'd4b49ca47eaa695df4547ba6c563d8b8';

const make_params = param => {
  return {
    ...param,
    api_key: API_KEY
  }
}

const MoviceService = {
  post: (param) => Axios.post(BASE_URL, make_params(...param)),
  get: (param) => Axios.get(`${BASE_URL}?api_key=${API_KEY}`)
}

export default MoviceService;