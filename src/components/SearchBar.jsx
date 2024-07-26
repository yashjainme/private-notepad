import React from 'react';
import { TextField, Typography, Box } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = ({ searchTerm, handleSearch }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#fdf0d5', flexGrow: 1 }}>
        Your Notes
      </Typography>
      <TextField
        variant="outlined"
        size="small"
        placeholder="Search notes..."
        value={searchTerm}
        onChange={handleSearch}
        InputProps={{ startAdornment: <Search sx={{ color: '#669bbc', mr: 1 }} /> }}
        sx={{
          bgcolor: '#fdf0d5',
          borderRadius: 1,
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: '#669bbc' },
            '&:hover fieldset': { borderColor: '#c1121f' },
          },
        }}
      />
    </Box>
  );
};

export default SearchBar;
