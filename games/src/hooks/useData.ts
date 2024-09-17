import { useEffect, useState } from "react";
import apiClient from "../service/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";
interface FetchingData<T>{
    count: number;
    results: T[];
}
//requestConfig?: AxiosRequestConfig use for query string parameter. means edit entire the url after keys added
const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(()=>{
        const controller = new AbortController();

        setLoading(true);
        apiClient.get<FetchingData<T>>(endpoint, {signal: controller.signal, ...requestConfig})
        .then(res=> {
            setData(res.data.results);
            setLoading(false);
        }
        )
        .catch(err=> {
            if(err instanceof CanceledError) return;
            setError(err.message);
            setLoading(false);
        }
        )
        return ()=> controller.abort();
    }, deps ? [...deps] : [])
  return {data, error, isLoading}
}

export default useData