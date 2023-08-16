import axios from 'axios'
const springAxiosInst = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
})
const fastApiAxiosInst = axios.create({
    baseURL: process.env.VUE_APP_FAST_API,
})

export default { springAxiosInst, fastApiAxiosInst }