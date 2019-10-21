import axios from 'axios';

const api = axios.create({
    baseURL: 'exp://yc-3ug.anonymous.mobile.exp.direct:80',
});

export default api;