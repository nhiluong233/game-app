import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"

interface Props{
    selectedHandler: (value: string )=> void;
    selectedOrdering: string;
}

const SortedSelector = ({selectedHandler, selectedOrdering}: Props) => {
    const sortSelectors = [
        {value:'', label:'Relevance'},
        {value:'-added', label:'Date added'},
        {value:'name', label:'Name'},
        {value:'-released', label:'Release date'},
        {value:'-metacritic', label:'Popularity'},
        {value:'-rating', label:'Average rating'}
    ]
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
        Order by: {selectedOrdering? sortSelectors.find(selector => selector.value === selectedOrdering)?.label : 'Relevance'}
        </MenuButton>
        <MenuList>
           {sortSelectors.map(s=><MenuItem key={s.value} onClick={()=>selectedHandler(s.value)}>{s.label}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default SortedSelector