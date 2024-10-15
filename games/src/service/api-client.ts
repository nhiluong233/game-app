import axios, { AxiosRequestConfig } from "axios";

export interface FetchingData<T>{
    count: number;
    next: string | null;
    results: T[];
}

const constantApi = axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key: 'cfc67336c0ad496aab4542d0f8277d10'
    }
})

class APIclient<T>{
   endPoint: string;
   
   constructor(endPoint: string){
    this.endPoint=endPoint;
   }

   getAll=(config: AxiosRequestConfig)=>{
    return constantApi.get<FetchingData<T>>(this.endPoint, config).then(res=>res.data);
   }
}
export default APIclient;