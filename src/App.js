import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import { Navbar, Feed, VideoDetail, SearchFeed, ChannelDetail } from './components';
import { ThemeProvider } from './context/ThemeContext';
import ThemeSwitcher from './components/ThemeSwitcher';

const App = () => (
  <ThemeProvider>
    <BrowserRouter>
      <Box sx={{ position: 'relative' }}>
        <Navbar />
        <ThemeSwitcher />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
