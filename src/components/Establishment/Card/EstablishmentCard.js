import React from 'react'
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/styles/makeStyles";

const useStyles = makeStyles({
    card: {
        margin:'10px',
        borderRadius:'2px'
    },
    media : {
        height:100
    }
})

const EstablishmentCard = () => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={require('../../../shared/f765abb2-31b2-45d6-b9d3-b82778358a3b.jpg')}
                    title="test"
                           />
               <CardContent>
                   <Typography variant='h5' component='h2' color='textPrimaryt'>3 Brasseurs</Typography>
                   <Typography variant="body2" color='textSecondary' component='p'>
                       Petite bière avec de la bonne bouffe
                   </Typography>
               </CardContent>
            </CardActionArea>
        </Card>
    )
};

export default EstablishmentCard