import React from 'react'
import makeStyles from "@material-ui/styles/makeStyles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {primary, secondary} from "../../../shared/colors";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import RoomIcon from '@material-ui/icons/Room';
import StarRateIcon from '@material-ui/icons/StarRate';
import {useHistory} from 'react-router-dom';
import Menu from "./Menu";



const useStyles = makeStyles({
    backButton:{
        position:'absolute',
        top:'10px',
        left:'10px',
        backgroundColor:primary,
        borderRadius: '50%',
        padding:'5px',
        color:'white'
    },
    favButton:{
        position:'absolute',
        top:'10px',
        right:'10px',
        backgroundColor:primary,
        borderRadius: '50%',
        padding:'5px',
        color:'white'
    },
    img : {
        height:'20vh',
        width:'100%'
    },
    paper : {
        margin:'5px 0 5px 0',
        borderRadius:'0px'
    },
    name:{
        color:primary,
        padding:'5px 5px 5px 20px',
        textAlign: 'left'
    },
    p : {
        textAlign:'left',
        padding:'10px 10px 10px 20px',
        display:'flex',
        alignItems:'center'
    },
    infos : {
        color:secondary,
        textAlign:'left',
        padding:'10px 10px 10px 20px'
    }
});

const EstablishmentDetail = (props) => {
    const {establishment} = props.location.state;
    const classes= useStyles();
    const history = useHistory();


    return(
    <div>
        <IconButton className={classes.backButton} onClick={() => history.goBack()}>
            <ArrowBackIcon/>
        </IconButton>
        <IconButton className={classes.favButton}>
            <FavoriteBorderIcon/>
        </IconButton>
        <img className={classes.img} src={require('../../../shared/f765abb2-31b2-45d6-b9d3-b82778358a3b.jpg')} alt='picture'/>
        <Paper className={classes.paper}>
            <Typography className={classes.name} variant='h4' component='h2' color='textPrimary'>{establishment.name}</Typography>
            <Typography className={classes.p} variant="body2" color='textSecondary' component='p'>
                {establishment.description}
            </Typography>
            <Typography className={classes.p} color='textSecondary'>
                {establishment.score}<StarRateIcon/>
            </Typography>
        </Paper>
        <Paper className={classes.paper}>
            <Typography variant='h6' className={classes.infos}>
                Informations sur l'établissement
            </Typography>
            <Typography className={classes.p} variant="body2" color='textSecondary' component='p'>
                <RoomIcon/> {establishment.address}
            </Typography>
        </Paper>
        <Menu />
    </div>
    )
}

export default  EstablishmentDetail