import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"

import { ImageGallery } from "../components"

export const NoteView = () => {
  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb:1}}>
        <Grid item>
            <Typography fontSize={ 28 } fontWeight='light'> 28 de Diciembre, 2022 </Typography>
        </Grid>
        <Grid item>
            <Button>
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
            />

            <TextField
                type='text'
                placeholder='¿Qué pasó hoy?'
                variant="filled"
                fullWidth
                multiline
                minRows={ 4 }
                sx={{ mb:1, border: 'none' }}
            />

        </Grid>

        <ImageGallery/>

    </Grid>

  )
}
