import { useDispatch } from "react-redux";
import { Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { TurnedInNot } from "@mui/icons-material"
import { useMemo } from "react";

import { setActiveNote } from "../../store/journal";


export const SideBarItem = ({ title = '', body, id, date, imageUrls = []}) => {

    const dispatch = useDispatch();

    const onSelectNote = () => {

        dispatch ( setActiveNote({title, body, id, date, imageUrls}) )
    };


    const newTitle = useMemo( ( ) => {
        return title.length > 15
            ? title.substr(0,15) + '...'
            : title;
    },[title])



  return (

    <ListItem disablePadding>
        <ListItemButton onClick = { onSelectNote }>
            <ListItemIcon>
                <TurnedInNot/>
            </ListItemIcon>
            <Grid container direction = 'column'>
                <ListItemText primary ={ newTitle }/>
                <ListItemText secondary = {body} /> 
            </Grid>
        </ListItemButton>
    </ListItem>
  )
}



