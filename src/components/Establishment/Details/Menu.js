import React from 'react'
import MenuCategory from "./MenuCategory";
import ScrollableAnchor from 'react-scrollable-anchor'
import { goToAnchor } from 'react-scrollable-anchor'



const Menu = (props) => {

    const {menu} = props.establishment

    return(
        menu.map(m => <MenuCategory category={m}/>)
    )
};

export default Menu;