import React, {useState} from 'react'
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/styles/makeStyles";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import IconButton from "@material-ui/core/IconButton";
import Chip from "@material-ui/core/Chip";
import {primary, secondary} from "../../../shared/colors";
import {Link} from "react-router-dom";


const EstablishmentCard = (props) => {
const useStyles = makeStyles({
    card: {
        margin: props.width ? '10px auto auto auto' : '10px',
        borderRadius:'2px',
        position:'relative',
        width: props.width ? props.width : 'unset'
    },
    media : {
        height:100
    },
    favButton : {
        position:'absolute',
        top:0,
        right:0,
        color:'white',
        zIndex:1
    },
    link:{
      textDecoration:'none',
        color:secondary
    },
    cardContent:{
      position:'relative'
    },
    score:{
        position: 'absolute',
        top: '5px',
        right: '5px',
        background:secondary,
        color:'white'
    }

})
    const [establishment,setEstablishment] = useState({
        name:'3 Brasseurs',
        description:'Petite bière avec de la bonne bouffe',
        score:5,
        favorite:false,
        address:'6 avenue Deschepper 59270 Bailleul',
        type:'Restaurant',
        kitchen:'Bistrot',
        img:'../../../shared/f765abb2-31b2-45d6-b9d3-b82778358a3b.jpg'
    })

    const classes = useStyles();
    return (
        <Card className={classes.card}>
                <IconButton className={classes.favButton}>
                    <FavoriteBorderIcon/>
                </IconButton>
            <Link className={classes.link}
                to={{
                pathname:'/establishment/detail',
                state:{establishment:establishment}
            }}>

            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={require('../../../shared/f765abb2-31b2-45d6-b9d3-b82778358a3b.jpg')}
                    title="test"
                           />
               <CardContent className={classes.cardContent}>
                   <Typography variant='h5' component='h2' color='textPrimary'>{establishment.name}</Typography>
                   <Typography variant="body2" color='textSecondary' component='p'>
                   {establishment.description}
               </Typography>
                   <Chip className={classes.score} label={establishment.score}/>
               </CardContent>
            </CardActionArea>
            </Link>
        </Card>
    )
};

export default EstablishmentCard