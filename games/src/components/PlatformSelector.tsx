import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatform from '../hooks/usePlatform'
import { Platform } from '../hooks/useGame';

interface Props{
    selectPlatform : (platform: Platform)=>void;
    selectedPlatform: Platform|null;
}
const PlatformSelector = ({selectPlatform, selectedPlatform}: Props) => {
    const {data} = usePlatform()
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
        {selectedPlatform ? selectedPlatform.name : "Platform"}
        </MenuButton>
        <MenuList>
        {data.map(platform=><MenuItem key={platform.id} onClick={()=>selectPlatform(platform)}>{platform.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector