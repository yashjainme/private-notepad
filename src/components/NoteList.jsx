import React from 'react';
import { Grid } from '@mui/material';
import { AnimatePresence } from 'framer-motion';
import NoteItem from './NoteItem';

const NoteList = ({ notes, handleEdit, handleDelete }) => {
  return (
    <Grid container spacing={2}>
      <AnimatePresence>
        {notes.map((note, index) => (
          <Grid item xs={12} key={note.id}>
            <NoteItem note={note} index={index} handleEdit={handleEdit} handleDelete={handleDelete} />
          </Grid>
        ))}
      </AnimatePresence>
    </Grid>
  );
};

export default NoteList;
