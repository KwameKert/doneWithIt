import {create} from 'apisauce';

const apiClient = create({
    baseURL: "http://192.168.8.101:5000"
})


export default apiClient;