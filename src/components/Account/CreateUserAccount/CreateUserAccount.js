import React, {useRef, useState} from 'react'
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import {Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import TextField from "@material-ui/core/TextField";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useTheme } from '@material-ui/core/styles';
import CreateUserAccountForm from "./CreateUserAccountForm";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {danger, primary, secondary} from "../../../shared/colors";
import {useMediaQuery} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";

const useStyles = makeStyles((theme) => ({
    dialogTitle:{
        backgroundColor:primary,
        color:'white',
        textAlign:'center',
        borderRadius:'0 0 10px 10px'
    },
    dialogActions:{
        position:'absolute',
        bottom:0,
        display:'flex',
        justifyContent:'space-between',
        width:'96%',
        padding:0,
        margin:'2%'
    },
    danger:{
        backgroundColor:danger,
        color:'white'
    },
    submit:{
        backgroundColor:secondary,
        color:'white'
    }
}));

const CreateUserAccount = (props) => {

    const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
    const SignUpSchema = Yup.object().shape({
        firstName: Yup.string()
            .required('Requis'),
        lastName: Yup.string()
            .required('Requis'),
        email: Yup.string()
            .email('Email invalide')
            .required('Required'),
        phone: Yup.string()
            .matches(phoneRegExp, 'N° de téléphone invalide'),
        birthDate: Yup.date()
    });

    const values = {
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
        birthDate:''
        };

    const submit = (values) => {
        console.log(values)
    }

    const classes = useStyles();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

    const [goSubmit,doSubmit] = useState(1)
    return (
        <Dialog open={props.open} fullScreen={fullScreen}>
            <DialogTitle className={classes.dialogTitle}>Création de compte</DialogTitle>
               <Formik
                   render={props => <CreateUserAccountForm {...props} submit={goSubmit}/>}
                   initialValues={values}
                   validationSchema={SignUpSchema}
                   onSubmit={submit}/>
                   <DialogActions className={classes.dialogActions} fullWidth>
                       <Button className={classes.danger} onClick={() => props.setOpen()}>Annuler</Button>
                       <Button className={classes.submit} onClick={() => doSubmit(goSubmit+1)}>Enregistrer</Button>
                   </DialogActions>
        </Dialog>
    )
}

export default CreateUserAccount;