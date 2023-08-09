import axios from 'axios'
const springAxiosInst = axios.create({
    baseURL: 'http://localhost:7777'
})
const fastApiAxiosInst = axios.create({
    baseURL: 'http://localhost:8000'
})

export default { springAxiosInst, fastApiAxiosInst }