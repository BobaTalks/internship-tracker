import '@fontsource/poppins';

import { CssBaseline, ThemeProvider } from '@mui/material';
import React, { Suspense, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Loading from './components/Loading';
import AuthContext from './contexts/AuthContext';
import theme from './theme';

const withSuspense = (Component) => (
  <Suspense fallback={<Loading />}>
    <Component />
  </Suspense>
);

const HomePage = React.lazy(() => import('./pages/HomePage'));
const SearchResultsPage = React.lazy(() => import('./pages/SearchResultsPage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const ErrorPage = React.lazy(() => import('./pages/ErrorPage'));
const TestPage = React.lazy(() => import('./pages/TestPage')); // temporary - to be deleted

const App = () => {
  const [authUser, setAuthUser] = useState(null);

  return (
    <BrowserRouter>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={withSuspense(HomePage)} />
          <Route path="/search" element={withSuspense(SearchResultsPage)} />
          <Route path="/about" element={withSuspense(AboutPage)} />
          <Route path="/test" element={withSuspense(TestPage)} />
          {/* temporary - to be deleted */}
          <Route path="*" element={withSuspense(ErrorPage)} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
