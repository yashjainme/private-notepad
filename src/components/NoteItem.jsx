import React from 'react';
import { Paper, Typography, IconButton, Box } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import { motion } from 'framer-motion';

const MotionPaper = motion(Paper);

const NoteItem = ({ note, index, handleEdit, handleDelete }) => {
  return (
    <MotionPaper
      elevation={2}
      sx={{ p: 2, borderRadius: 2, bgcolor: '#fdf0d5', color: '#003049' }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <Typography variant="h6" sx={{ color: '#780000' }}>{note.title}</Typography>
      <Typography className='content-box' variant="body1" sx={{ mb: 2 }}>{note.content}</Typography>
      <Typography variant="caption" sx={{ color: '#669bbc' }}>
        {new Date(note.timestamp).toLocaleString()}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <IconButton onClick={() => handleEdit(index)} sx={{ color: '#c1121f' }}>
          <Edit />
        </IconButton>
        <IconButton onClick={() => handleDelete(index)} sx={{ color: '#780000' }}>
          <Delete />
        </IconButton>
      </Box>
    </MotionPaper>
  );
};

export default NoteItem;
