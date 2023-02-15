import { SaveOutlined, SwapCalls, TransgenderTwoTone, UploadOutlined } from "@mui/icons-material"
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import { useEffect, useMemo, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2"
import 'sweetalert2/dist/sweetalert2.css'

import { useForm } from "../../hooks"
import { setActiveNote, startSaveNote } from "../../store/journal"
import { ImageGallery } from "../components"

export const NoteView = () => {

    const dispatch = useDispatch()

    const { active:note, messageSaved, isSaving } = useSelector( state => state.journal)

    const { body, title, date, onInputChange, formState } = useForm( note )

    const dateString = useMemo(() => {
        const newDate = new Date( date )
        return newDate.toUTCString()
    }, [date])

    const fileInputRef = useRef()

    useEffect(() => {
        dispatch( setActiveNote(formState))
    }, [formState])

    useEffect(() => {
        if( messageSaved.length > 0 ){
            Swal.fire('Message saved', messageSaved, 'success')
        }


    }, [messageSaved])
    

    const onSaveNote = () => {
        dispatch( startSaveNote() )
    }

    const onFileInputChange = (e) => {
        if( TransgenderTwoTone.files === 0 ) return

        console.log('subiendo archivos')
    }
    



  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb:1}}>
        <Grid item>
            <Typography fontSize={ 28 } fontWeight='light'> { dateString } </Typography>
        </Grid>
        <Grid item>

            <input 
                type='file'
                multiple
                ref={ fileInputRef }
                onChange={ onFileInputChange }
                style={{ display:'none' }}
            />

            <IconButton 
                color="primary" 
                disabled={ isSaving }
                onClick={ () => fileInputRef.current.click() }
            >
                <UploadOutlined/>
            </IconButton>


            <Button
                disabled={ isSaving }
                onClick={ onSaveNote}
                color='primary'
                sx={{padding:2}}
                >
                <SaveOutlined sx={{ fontSize: 30, mr:1}}/>
                Guardar
            </Button>
        </Grid>

        <Grid container>
            <TextField
                type='text'
                placeholder='Ingrese un título'
                variant="filled"
                fullWidth
                label='Título'
                sx={{ mb:1, border: 'none' }}
                name='title'
                value={ title }
                onChange={ onInputChange }

            />

            <TextField
                type='text'
                placeholder='¿Qué pasó hoy?'
                variant="filled"
                fullWidth
                multiline
                minRows={ 4 }
                sx={{ mb:1, border: 'none' }}
                name='body'
                value={ body }
                onChange={ onInputChange }
            />

        </Grid>

        <ImageGallery/>

    </Grid>

  )
}
