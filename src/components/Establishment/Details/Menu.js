import React from 'react'
import MenuCategory from "./MenuCategory";

const Menu = () => {
    const menuList = [
        {
            category: 'Boissons',
            description:'glouglou',
            dishs:[
                {
                name:'Coca',
                description:'c bon mé sucré',
                price:'9€',
                picture:'../../../shared/f765abb2-31b2-45d6-b9d3-b82778358a3b.jpg',
                allergens:'sucre'
                },
                {
                    name:'Fanta',
                    description:'c bon mé sucré',
                    price:'10€',
                    picture:'../../../shared/f765abb2-31b2-45d6-b9d3-b82778358a3b.jpg',
                    allergens:'orange'
                }
            ]
        },
        {
            category: 'Plats',
            description:'miam miam',
            dishs:[
                {
                    name:'Carbonnadee',
                    description:'C BON SA MERE',
                    price:'19€',
                    picture:'../../../shared/f765abb2-31b2-45d6-b9d3-b82778358a3b.jpg',
                    allergens:'c pas hallal'
                },
                {
                    name:'Carbonnadee',
                    description:'C BON SA MERE',
                    price:'19€',
                    picture:'../../../shared/f765abb2-31b2-45d6-b9d3-b82778358a3b.jpg',
                    allergens:'c pas hallal'
                },
                {
                    name:'Carbonnadee',
                    description:'C BON SA MERE',
                    price:'19€',
                    picture:'../../../shared/f765abb2-31b2-45d6-b9d3-b82778358a3b.jpg',
                    allergens:'c pas hallal'
                },
                {
                    name:'Carbonnadee',
                    description:'C BON SA MERE',
                    price:'19€',
                    picture:'../../../shared/f765abb2-31b2-45d6-b9d3-b82778358a3b.jpg',
                    allergens:'c pas hallal'
                }
            ]
        }
    ]

    return(
        menuList.map(m => <MenuCategory category={m}/>)
    )
};

export default Menu;