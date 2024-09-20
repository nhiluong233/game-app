import { Image, ImageProps } from "@chakra-ui/react"
import bullEyes from '../assets/bulls-eye.webp';
import thumbUp from '../assets/thumbs-up.webp';
import meh from '../assets/meh.webp';

interface Props{
    rating_top: number;
}
const Emojis = ({rating_top}: Props) => {
    if(rating_top<3) return null;
    const emojiMap: {[key:number]: ImageProps}={
        3: {src:meh, alt: 'meh', boxSize:'35px'},
        4: {src:bullEyes, alt: 'recommended', boxSize:'35px'},
        5: {src:thumbUp, alt: 'exceptional', boxSize:'25px'}
    }
  return (
    <Image {...emojiMap[rating_top]} marginTop={1}/>
  )
}

export default Emojis