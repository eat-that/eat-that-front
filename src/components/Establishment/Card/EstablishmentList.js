import React from 'react'
import EstablishmentCard from "./EstablishmentCard";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    list : {
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap'
    }
})

const EstablishmentList = () => {
    const classes = useStyles();
    return (
        <div className={classes.list}>
            <EstablishmentCard width={'48vh'}/>
            <EstablishmentCard width={'48vh'}/>
            <EstablishmentCard width={'48vh'}/>
            <EstablishmentCard width={'48vh'}/>
            <EstablishmentCard width={'48vh'}/>
            <EstablishmentCard width={'48vh'}/>
            <EstablishmentCard width={'48vh'}/>
            <EstablishmentCard width={'48vh'}/>
            <EstablishmentCard width={'48vh'}/>
        </div>
    )
}
export default EstablishmentList