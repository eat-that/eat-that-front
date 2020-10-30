import React from 'react'
import EstablishmentCard from "./EstablishmentCard";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    category : {
        textAlign:'left',
        fontWeight:'bold',
        paddingLeft:'20px',
        marginTop:'10px'
    }
})

const EstablishmentCarousel = (props) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
        }
    }

    const classes = useStyles();

    return (
        <div>
            <Typography variant='h6' color="textPrimary" className={classes.category}>{props.category}</Typography>
            <Carousel partialVisible={true} responsive={ responsive}  removeArrowOnDeviceType={["tablet", "mobile"]}>
                <EstablishmentCard/>
                <EstablishmentCard/>
                <EstablishmentCard/>
                <EstablishmentCard/>
            </Carousel>
        </div>
    )
};

export default EstablishmentCarousel