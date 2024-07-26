import React from 'react';
import { Box, Pagination } from '@mui/material';

const PaginationControls = ({ filteredNotes, notesPerPage, currentPage, handleChangePage }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
      <Pagination
        count={Math.ceil(filteredNotes.length / notesPerPage)}
        page={currentPage}
        onChange={handleChangePage}
        color="primary"
        sx={{ '& .MuiPaginationItem-root': { color: '#fdf0d5' } }}
      />
    </Box>
  );
};

export default PaginationControls;
