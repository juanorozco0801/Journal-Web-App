import { AddOutlined } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"

import { startNewNote } from "../../store/journal/thunks"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"

export const JournalPage = () => {

  const dispatch = useDispatch();

  const { isSaving, active }= useSelector( state => state.journal )

  const onClickNewNote = () => {
    dispatch( startNewNote() )
  }


  return (
    <JournalLayout>


      {/* nota activa o nada seleccionado  */}

      {
        (!!active)
        ? <NoteView />
        : <NothingSelectedView />
      }


      <IconButton
        disabled={ isSaving }
        onClick={ onClickNewNote }
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover':{ backgroundColor: 'error.dark'},
          position: 'fixed',
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }}/>
      </IconButton>


    </JournalLayout>
  )
}
