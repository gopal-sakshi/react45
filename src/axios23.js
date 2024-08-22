import axios from 'axios';

axios.interceptors.request.use(
    config => {
        const token = localStorageService.getAccessToken()
        if (token) {
            config.headers['Authorization'] = 'token23'
        }
        return config
    },
    error => {
        Promise.reject(error)
    }
)


axios.interceptors.response.use(
    response => { return response },
    function (error) {
        const originalRequest = error.config
        console.log("1st request fail ayindi, malli try chesko");
    }
)

export default axios;