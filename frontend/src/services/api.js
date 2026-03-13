import axios from 'axios';

const api = axios.create({
    baseURL: 'https://backend-cadastro-usuarios-w6sk.onrender.com'
})

export default api;