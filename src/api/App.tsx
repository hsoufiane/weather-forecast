import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider, CssBaseline } from '@mui/material';
import {WeatherScreenView} from './features/WeatherScreen/WeatherScreen.view'
import { theme } from './theme';

const queryClient = new QueryClient();

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<WeatherScreenView />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

