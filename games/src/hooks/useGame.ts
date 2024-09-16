import { useEffect, useState } from "react";
import apiClient from "../service/api-client";
import { CanceledError } from "axios";

export interface Platform{
    id: number;
    slug: string;
    name: string;
}

export interface Game{
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
}

interface GameData{
    count: number;
    results: Game[];
}

const useGame = () => {
    const [games, setGames]= useState<Game[]>([]);
    const [error,setError]=useState('');
    const [isLoading, setLoading]=useState(false);

    useEffect(()=>{
        const controller = new AbortController();
        setLoading(true);
        apiClient.get<GameData>('/games', {signal: controller.signal})
        .then(res=>{
            setGames(res.data.results);
            setLoading(false);
        })
        .catch(err=> {
            if(err instanceof CanceledError) return;
            setError(err.message);
            setLoading(false);
        })

        return ()=> controller.abort();
    },[])

  return {games, error, isLoading}
}

export default useGame