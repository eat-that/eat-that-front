import React from 'react'
import HomeHeader from "./HomeHeader";
import EstablishmentCarousel from "../Establishment/Card/EstablishmentCarousel";
import EstablishmentList from "../Establishment/Card/EstablishmentList";

const Home = () => {

    return (
        <>
            <HomeHeader/>
            <EstablishmentCarousel category={'A la une'}/>
            <EstablishmentList/>
        </>
    )
};
export default Home;