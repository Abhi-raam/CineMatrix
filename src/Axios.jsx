import axios from 'axios'
import { baseUrl } from './Constants/Const';
const instance = axios.create({
    baseURL: baseUrl,
  });

  export default instance