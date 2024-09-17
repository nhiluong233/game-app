import useData from "./useData";

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


const useGame = (selectedGenre: string) => useData<Game>('/games', {params : {genres: selectedGenre||null}}, [selectedGenre])

export default useGame