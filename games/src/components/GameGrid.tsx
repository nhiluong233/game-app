import useGame from "../hooks/useGame"


const GameGrid = () => {
    const {games, error} = useGame()
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