import axios from 'axios';

const Axios = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:4000',
});

export default Axios;