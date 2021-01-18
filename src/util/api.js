import axios from 'axios';

const api = axios.create({
  baseURL: process.env.BASE_URL,
  //실제 url 넣기 
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
    'Access-Control-Allow-Headers':
    'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
  },
  validateStatus(status) {
    return status < 500;
  },
});

export default api;

//survey
//진행중인 설문조사 로딩
export const getS = () => api.get('/surveys');
