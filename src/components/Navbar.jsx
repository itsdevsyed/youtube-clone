import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, InputBase, IconButton, Tooltip } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { styled, alpha } from '@mui/material/styles';

const SearchContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#000000' ,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end', // Move the toggler to the right
  background: alpha(theme.palette.background.paper, 0.15),
  backdropFilter: 'blur(10px)',
  borderRadius: '25px',
  padding: '4px 16px',
  width: '100%',
  maxWidth: '600px',
  boxShadow: '0 2px 15px rgba(0, 0, 0, 0.1)',
  transition: 'box-shadow 0.3s ease-in-out, background 0.3s ease-in-out',
  '&:hover': {
    background: alpha(theme.palette.background.paper, 0.25),
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
  },
  margin: 'auto',
  [theme.breakpoints.down('md')]: {
    width: '70%',
  },
  [theme.breakpoints.down('sm')]: {
    width: '90%',
  },
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.text.primary,
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(2)})`, // Space for the search icon
    fontSize: '1rem',
    fontWeight: 300,
    width: '100%', // Take up all available space
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  flexGrow: 1, // Allow the input to grow and take up space
  minWidth: 0, // Allow the input to shrink below its content size
}));

const SearchButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.main,
  background: alpha(theme.palette.primary.main, 0.1),
  backdropFilter: 'blur(10px)',
  borderRadius: '50%',
  padding: 8,
  marginLeft: 12,
  transition: 'background 0.3s ease-in-out, transform 0.2s ease-in-out',
  '&:hover': {
    background: alpha(theme.palette.primary.main, 0.2),
    transform: 'scale(1.05)',
  },
  flexShrink: 0, // Prevent the button from shrinking
}));

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm('');
    }
  };

  const handleVoiceSearch = () => {
    // Implement voice search functionality here
    console.log("Voice search activated!");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
      <SearchContainer>
        <SearchIcon sx={{ color: 'text.secondary', mr: 1, opacity: 0.7 }} />
        <StyledInputBase
          placeholder="Search videos, channels..."
          inputProps={{ 'aria-label': 'search' }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Tooltip title="Search">
          <SearchButton type="submit" aria-label="search">
            <SearchIcon />
          </SearchButton>
        </Tooltip>
        <Tooltip title="Search with voice">
          <SearchButton onClick={handleVoiceSearch} aria-label="voice search" sx={{ ml: 1 }}>
            <MicIcon />
          </SearchButton>
        </Tooltip>
      </SearchContainer>
    </form>
  );
};

export default SearchBar;
