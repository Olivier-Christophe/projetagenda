import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import * as yup from "yup";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useSelector } from 'react-redux';
import { Autocomplete, Button, TextField } from "@mui/material";
import { Email } from "@mui/icons-material";
import PCLoadingButton from '../PCLoadingButton/PCLoadingButton';

const ParticipantForm = ({ handleOnSuccess }) => {


    const validationSchema = yup.object({
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
        bce: yup
            .number()
            .max(50, 'max 50')
            .required('le champs est requis'),

    })

    const defaultValues = {
        nomEntreprise: '',
        siegeSocial: '',
        nom: '',
        prenom: '',
        numTel: '',
        email: '',
        bce: 0
    };
    
    const { control, handleSubmit, reset, formState: { errors } } = useForm({ defaultValues, resolver: yupResolver(validationSchema) });

    const [isLoading, setIsLoading] = useState(false);
    // const onDelete = () => {
    //     if(Participant?.id) {
    //         setIsLoading(true);
    //         axios.delete(process.env.REACT_APP_API_URL + '/participant/' + participant.id)
    //             .then(() => {
    //                 dispatch(removeParticipant(participant.id));
    //                 dispatch(showToast({ severity: 'success', message: 'La sauvegarde a réussi' }));
    //                 onSuccess();
    //             })
    //             .catch(e => {
    //                 dispatch(showToast({ severity: 'error', message: 'La sauvegarde a échoué' }));
    //                 onError(e);
    //             })
    //             .finally(() => setIsLoading(false));
    //     }
    // }


    const handleOnsubmit = (form) => {
        form.preventDefault()
        console.log("form => ", form)

    
    }








    return (
        <form onSubmit={(form) => handleOnsubmit(form)}>
            <div className="form-group">
            <Controller name="nomEntreprise"
                control={control}
                render={({ field }) =>
                    <TextField {...field}
                        label="nomEntreprise"
                        multiline={true}
                        fullWidth={true}
                        rows={3}
                        error={!!errors.description}
                        helperText={!!errors.description && errors.description.message} />

                } /></div>
                
             
            <div className="form-group">
                <Controller name="siegeSocial"
                    control={control}
                    render={({ field }) =>
                        <TextField {...field}
                            label="siegeSocial"
                            multiline={true}
                            fullWidth={true}
                            rows={3}
                            error={!!errors.description}
                            helperText={!!errors.description && errors.description.message} />

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
                            error={!!errors.description}
                            helperText={!!errors.description && errors.description.message} />

                    } />
            </div>
          
            <div className="form-group">
                <Controller name="prenom"
                    control={control}
                    render={({ field }) =>
                        <TextField {...field}
                            label="Prenom"
                            multiline={true}
                            fullWidth={true}
                            rows={3}
                            error={!!errors.description}
                            helperText={!!errors.description && errors.description.message} />

                    } />
            </div>
            <div className="form-group">
                <Controller name="numTel"
                    control={control}
                    render={({ field }) =>
                        <TextField {...field}
                            label="NumTel"
                            multiline={true}
                            fullWidth={true}
                            rows={3}
                            error={!!errors.description}
                            helperText={!!errors.description && errors.description.message} />

                    } />
            </div>
            <div className="form-group">
                <Controller name="email"
                    control={control}
                    render={({ field }) =>
                        <TextField {...field}
                            label="email"
                            multiline={true}
                            fullWidth={true}
                            rows={3}
                            error={!!errors.description}
                            helperText={!!errors.description && errors.description.message} />

                    } />
            </div>
            
            <div className="form-group">
                <Controller name="bce"
                    control={control}
                    render={({ field }) =>
                        <TextField {...field}
                            label="bce"
                            multiline={true}
                            fullWidth={true}
                            rows={3}
                            error={!!errors.description}
                            helperText={!!errors.description && errors.description.message} />

                    } />
                </div>
            <div className="form-group">
                <PCLoadingButton disabled={isLoading} type="submit" variant="contained">Sauver</PCLoadingButton>
            </div>
        </form>
            
    
    )
}

export default ParticipantForm