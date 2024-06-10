// src/components/ThemeSwitcher.jsx
import React from 'react';
import { IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useTheme, useThemeUpdate } from '../context/ThemeContext';

const ThemeSwitcher = () => {
  const theme = useTheme();
  const toggleTheme = useThemeUpdate();

  return (
    <IconButton onClick={toggleTheme} color="inherit">
      {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
};

export default ThemeSwitcher;
