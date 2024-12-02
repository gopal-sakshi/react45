import axios from 'axios';

axios.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = 'token23'
        } else {
            config.headers['Authorization'] = 'token_ledu_pora'
        }
        console.log("req interceptor lo unnaa");
        return config
    },
    error => {
        Promise.reject(error)
    }
)


axios.interceptors.response.use(
    response => { 
        localStorage.setItem('token', new Date().toISOString())
        return response 
    },
    function (error) {
        const originalRequest = error.config
        console.log("1st request fail ayindi, malli try chesko");
    }
)

export default axios;