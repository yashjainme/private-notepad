


import React, { useState, useEffect } from 'react';
import { Container, Paper, Typography, Box, Tooltip } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { motion } from 'framer-motion';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import SearchBar from './components/SearchBar';
import PaginationControls from './components/PaginationControls';
import './App.css';
import '@fontsource/montserrat';

const theme = createTheme({
  palette: {
    primary: { main: '#c1121f' },
    secondary: { main: '#669bbc' },
    background: { default: '#fdf0d5', paper: '#ffffff' },
    text: { primary: '#003049', secondary: '#780000' },
  },
  typography: {
    fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", serif',
  },
});

const MotionContainer = motion(Container);
const MotionPaper = motion(Paper);

function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  const [formInput, setFormInput] = useState({ title: '', content: '' });
  const [editIndex, setEditIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const notesPerPage = 10;

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (formInput.title.trim() === '') return;
    const timestamp = new Date().toISOString();
    if (editIndex !== null) {
      setNotes((prevNotes) =>
        prevNotes.map((note, index) =>
          index === editIndex ? { ...formInput, timestamp } : note
        )
      );
      setEditIndex(null);
    } else {
      setNotes((prevNotes) => [
        { id: Date.now(), ...formInput, timestamp },
        ...prevNotes,
      ]);
    }
    setFormInput({ title: '', content: '' });
  };

  const handleEdit = (index) => {
    setFormInput(notes[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setNotes((prevNotes) => prevNotes.filter((_, i) => i !== index));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastNote = currentPage * notesPerPage;
  const indexOfFirstNote = indexOfLastNote - notesPerPage;
  const currentNotes = filteredNotes.slice(indexOfFirstNote, indexOfLastNote);

  const handleChangePage = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', py: 4 }}>
        <MotionContainer
          maxWidth="md"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <MotionPaper
            elevation={3}
            sx={{ p: 4, borderRadius: 4, bgcolor: '#003049' }}
            whileHover={{ boxShadow: 10 }}
          >
            <Tooltip title="Your notes, your control. Stored locally for your peace of mind.">
              <Typography variant="h3" gutterBottom align="center" sx={{ fontWeight: 'bold', color: '#fdf0d5' }}>
              Private Notepad
              </Typography>
            </Tooltip>
            <NoteForm
              formInput={formInput}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              editIndex={editIndex}
            />
            <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
            <NoteList notes={currentNotes} handleEdit={handleEdit} handleDelete={handleDelete} />
            <PaginationControls
              filteredNotes={filteredNotes}
              notesPerPage={notesPerPage}
              currentPage={currentPage}
              handleChangePage={handleChangePage}
            />
          </MotionPaper>
        </MotionContainer>
      </Box>
    </ThemeProvider>
  );
}

export default App;
