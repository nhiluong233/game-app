import {FaAndroid, FaApple, FaXbox, FaPlaystation, FaLinux, FaWindows} from 'react-icons/fa';
import {MdPhoneIphone} from 'react-icons/md';
import {SiNintendo} from 'react-icons/si';
import {BsGlobe} from 'react-icons/bs';
import { Platform } from '../hooks/useGame';
import { HStack, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface Props{
    platforms: Platform[];
}

const PlatformIcons = ({platforms}: Props) => {
    const iconsMap : {[key:string]:IconType}= {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        ios: MdPhoneIphone,
        android: FaAndroid,
        mac: FaApple,
        linux: FaLinux,
        nintendo: SiNintendo,
        web: BsGlobe
    }

  return (
    <>
    <HStack marginY={1}>
        {platforms.map(p=><Icon as={iconsMap[p.slug]} color={"gray.500"}/>)}
    </HStack>
    </>
  )
}

export default PlatformIcons