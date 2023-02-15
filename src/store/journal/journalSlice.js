import { StarRate, StarRateSharp } from '@mui/icons-material';
import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null,
        // active: {
        //     id: 'ABC',
        //     date: 0,
        //     title: '',
        //     body: '',
        //     imageUrl: [],
        // },
    },
    reducers: {
        savingNewNote: ( state ) => {
            state.isSaving = true;
        },
        addNewEmptyNote: ( state, action ) => {
            state.notes.push( action.payload );
            state.isSaving = false;
        },
        setActiveNote: ( state, action ) => {
            state.active = action.payload;
            state.messageSaved = ''
        },
        setNotes: ( state, {payload} ) => {
            state.notes = payload ;

        },
        setSaving: ( state, action ) => {
            state.isSaving = true;
            state.messageSaved = ''

        },
        updateNote: ( state, {payload} ) => {
            state.isSaving = false;
            state.notes = state.notes.map( note => {
                if ( note.id === payload.id ) {
                    return payload;
                } else {
                    return note;
                }
            })

            state.messageSaved = `${payload.title}, saved`
        },
        setPhotosToActiveNote: (state, action) => {
            state.active.imageUrls = [ ...state.active.imageUrls, ...action.payload]
            state.isSaving = false;
        },

        clearNotesLogout: (state) => {
            state.isSaving = false;
            state.messageSaved = '';
            state.notes = [];
            state.active = null;
        },

        deleteNoteById: ( state, action ) => {
            state.notes = state.notes.filter( note => note.id !== action.payload );
            state.active = null;

        },
        
    } 
});



export const { 
    addNewEmptyNote,
    clearNotesLogout,
    deleteNoteById, 
    savingNewNote,
    setActiveNote, 
    setNotes, 
    setPhotosToActiveNote,
    setSaving, 
    updateNote,
} = journalSlice.actions;