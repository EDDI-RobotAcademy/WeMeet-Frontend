import axios from 'axios'
const springAxiosInst = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
})
springAxiosInst.interceptors.response.use((res)=> {
    return res;
}, async (error)=> {
    if(error.response?.data.msg==="Token type Bearer") {
        await springAxiosInst.get("/jwt/refresh", {withCredentials: true})
          .then((res) => {
            springAxiosInst.defaults.headers.common.Authorization = `Bearer ${res.data.accessToken}`
            error.config.headers.Authorization = `Bearer ${res.data.accessToken}`
            springAxiosInst(error.config)
          })
    }
    return Promise.reject(error)
})
const fastApiAxiosInst = axios.create({
    baseURL: process.env.VUE_APP_FAST_API,
})

export default { springAxiosInst, fastApiAxiosInst }