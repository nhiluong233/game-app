import useData from './useData'
import { Platform } from './useGame'

const usePlatform = () => useData<Platform>('/platforms/lists/parents')

export default usePlatform