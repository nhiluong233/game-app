import { useEffect, useState } from "react"
import apiClient from "../service/api-client";
interface Game{
    id: number,
    name: string
}
interface GameData{
    count: number;
    results: Game[];
}
const GameGrid = () => {
    const [games, setGames]= useState<Game[]>([]);
    const [error,setError]=useState('');

    useEffect(()=>{
        apiClient.get<GameData>('/xgames')
        .then(res=>setGames(res.data.results))
        .catch(err=> setError(err.message))
    })

  return (
    <>
    {error&&<p>{error}</p>}
    <ul>
        {games.map(g=><li key={g.id}>{g.name}</li>)}
    </ul>
    </>
  )
}

export default GameGrid