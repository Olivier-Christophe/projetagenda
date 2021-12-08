import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import * as yup from "yup";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useSelector,useDispatch } from 'react-redux';
import { Autocomplete, Button, TextField } from "@mui/material";
import { Email } from "@mui/icons-material";
import PCLoadingButton from '../PCLoadingButton/PCLoadingButton';
import './ParticipantForm.scss'

const ParticipantForm = ({ handleOnSuccess }) => {


    const validationSchema = yup.object({
        bce: yup
            .number()
            .max(50, 'max 50')
            .required('le champs est requis'),
        nomEntreprise: yup
            .string()
            .max(255, 'Maximum 255 ')
            .required('le champ est requis'),
        siegeSocial: yup
            .string()
            .max(50, 'max 50')
            .required('Le champ est requis'),
        nom: yup
            .string()
            .max(50, 'max 50')
            .required('le champs est requis'),
        prenom: yup
            .string()
            .max(50, 'max 50')
            .required('le champs est requis'),
        numTel: yup
            .string()
            .max(50, 'max 50')
            .required('le champs est requis'),
        email: yup
            .string()
            .max(255, 'max 255')
            .required('le champs est requis'),


    })
    const dispacth = useDispatch();

   const [isLoading,setIsLoading] = useState(false);    

   const defaultValues = {
       nomEntreprise: '',
       siegeSocial: '',
       nom: '',
       prenom: '',
       numTel: '',
       email: '',
       bce: 0
   };

    const { control, handleOnsubmit, reset, formState: { errors } } = useForm({ defaultValues, resolver: yupResolver(validationSchema) });

    // const [isLoading, setIsLoading] = useState(false);
    const participants = useSelector(state => state.participants.list);
   console.log("participants => ", participants);



    const onSubmit = data => {
        const cleanData = {
            ...data,
            nomEntreprise: data.nomEntreprise,
            siegeSocial: data.siegeSocial,
            nom: data.nom,
            prenom: data.prenom,
            numTel: data.numTel,
            email: data.email,
            bce: data.bce
        }
        // if(){

        // }else{

        // }


    }
    useEffect(() => {
        reset({})
    }, [])


    return (
        <div className="participantcard">
        <form onSubmit={handleOnsubmit(onSubmit)}>
            <div className="form-group">
                <Controller name="bce"
                    control={control}
                    render={({ field }) =>
                        <TextField {...field}
                            label="BCE"
                            multiline={true}
                            fullWidth={true}
                            rows={3}
                            error={!!errors.bce}
                            helperText={!!errors.bce && errors.bce.message} />

                    } />
            </div>

            <div className="form-group">
                <Controller name="nomEntreprise"
                    control={control}
                    render={({ field }) =>
                        <TextField {...field}
                            label="Nom d'entreprise"
                            multiline={true}
                            fullWidth={true}
                            rows={3}
                            error={!!errors.nomEntreprise}
                            helperText={!!errors.nomEntreprise && errors.nomEntreprise.message} 
                        />

                } />
            </div>
            <div className="form-group">
                <Controller name="numTel"
                    control={control}
                    render={({ field }) =>
                        <TextField {...field}
                            label="Numéro de téléphone"
                            fullWidth={true}
                            error={!!errors.numTel}
                            helperText={!!errors.numTel && errors.numTel.message} />

                    } />
            </div>
            <div className="form-group">
                <Controller name="email"
                    control={control}
                    render={({ field }) =>
                        <TextField {...field}
                            label="E-mail"
                            multiline={true}
                            fullWidth={true}
                            rows={3}
                            error={!!errors.email}
                            helperText={!!errors.email && errors.email.message} />

                    } />
            </div>
            <div className="form-group">
                <Controller name="nom"
                    control={control}
                    render={({ field }) =>
                        <TextField {...field}
                            label="Nom"
                            multiline={true}
                            fullWidth={true}
                            rows={3}
                            error={!!errors.nom}
                            helperText={!!errors.nom && errors.nom.message} />

                    } />
            </div>
            <div className="form-group">
                <Controller name="prenom"
                    control={control}
                    render={({ field }) =>
                        <TextField {...field}
                            label="Prénom"
                            multiline={true}
                            fullWidth={true}
                            rows={3}
                            error={!!errors.prenom}
                            helperText={!!errors.prenom && errors.prenom.message} />

                    } />
            </div>


            <div className="form-group">
                <PCLoadingButton disabled={isLoading} type="submit" variant="contained">Sauvegarder</PCLoadingButton>
            </div>
        </form>
        </div>


    )
}

export default ParticipantForm