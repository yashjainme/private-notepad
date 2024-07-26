import React from 'react';
import { TextField, Button, Box } from '@mui/material';
import { AddCircle } from '@mui/icons-material';

const NoteForm = ({ formInput, handleInputChange, handleSubmit, editIndex }) => {
  return (
    <Box sx={{ mb: 4 }}>
      <TextField
        label="Title"
        name="title"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={handleInputChange}
        value={formInput.title}
        sx={{
          bgcolor: '#fdf0d5',
          borderRadius: 1,
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: '#669bbc' },
            '&:hover fieldset': { borderColor: '#c1121f' },
          },
        }}
      />
      <TextField
        label="Content"
        name="content"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        margin="normal"
        onChange={handleInputChange}
        value={formInput.content}
        sx={{
          bgcolor: '#fdf0d5',
          borderRadius: 1,
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: '#669bbc' },
            '&:hover fieldset': { borderColor: '#c1121f' },
          },
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        fullWidth
        sx={{ mt: 2, color: '#fdf0d5', fontWeight: 'bold' }}
        startIcon={<AddCircle />}
      >
        {editIndex !== null ? 'Update Note' : 'Add Note'}
      </Button>
    </Box>
  );
};

export default NoteForm;
