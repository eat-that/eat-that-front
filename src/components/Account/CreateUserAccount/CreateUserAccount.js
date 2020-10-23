import React from 'react'
import Dialog from "@material-ui/core/Dialog";
import {Formik} from "formik";
import * as Yup from 'yup';
import DialogTitle from "@material-ui/core/DialogTitle";
import { useTheme } from '@material-ui/core/styles';
import CreateUserAccountForm from "./CreateUserAccountForm";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {background, danger, primary, secondary} from "../../../shared/colors";
import {useMediaQuery} from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
    dialogTitle:{
        background:background,
        color:'white',
        textAlign:'center',
        borderRadius:'0 0 10px 10px',
        position:'relative',
    },
    backButton:{
        position: 'absolute',
        left: 0,
        top: '15%',
        color:'white'
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
            .required('Ce champ est requis'),
        lastName: Yup.string()
            .required('Ce champ est requis'),
        email: Yup.string()
            .email('Email invalide')
            .required('Ce champ est requis'),
        password: Yup.string()
            .min(8, "Le mot de passe doit contenir au moins 8 caractères")
            .required("Entrez votre mot de passe"),
        confirmPassword: Yup.string()
            .required("Confirmez votre mot de passe")
            .oneOf([Yup.ref('password')], "Les mots de passe ne correspondent pas"),
        phone: Yup.string()
            .matches(phoneRegExp, 'N° de téléphone invalide'),
        birthDate: Yup.date()

    });

    const values = {
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:'',
        phone:'',
        birthDate:''
        };

    const submit = (values) => {
        console.log(values)
    }

    const classes = useStyles();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <Dialog open={props.open} fullScreen={fullScreen}>
            <DialogTitle className={classes.dialogTitle}>
                    <IconButton onClick={() => props.setOpen()} className={classes.backButton}>
                        <ArrowBackIcon/>
                    </IconButton>
                    Création de compte
            </DialogTitle>

               <Formik
                   render={props => <CreateUserAccountForm {...props}/>}
                   initialValues={values}
                   validationSchema={SignUpSchema}
                   onSubmit={submit}/>
        </Dialog>
    )
}

export default CreateUserAccount;