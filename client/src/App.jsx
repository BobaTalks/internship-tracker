import '@fontsource/poppins';

import { CssBaseline, ThemeProvider } from '@mui/material';
import React, { Suspense, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import secureLocalStorage from 'react-secure-storage';

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
const SignInPage = React.lazy(() => import('./pages/SignInPage'));
const TrackerPage = React.lazy(() => import('./pages/TrackerPage'));
const SignUpPage = React.lazy(() => import('./pages/SignUpPage'));
const AccountSettingsPage = React.lazy(() =>
  import('./pages/AccountSettingsPage')
);

const App = () => {
  const [authUser, setAuthUser] = useState(() => {
    return secureLocalStorage.getItem('email')
      ? secureLocalStorage.getItem('email')
      : null;
  });

  return (
    <BrowserRouter>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <AuthContext.Provider value={[authUser, setAuthUser]}>
          <Routes>
            <Route path="/" element={withSuspense(HomePage)} />
            <Route path="/search" element={withSuspense(SearchResultsPage)} />
            <Route path="/about" element={withSuspense(AboutPage)} />
            {/* temporary - to be deleted */}
            <Route path="/test" element={withSuspense(TestPage)} />
            <Route path="/signin" element={withSuspense(SignInPage)} />
            <Route path="/signup" element={withSuspense(SignUpPage)} />
            <Route path="/tracker" element={withSuspense(TrackerPage)} />
            <Route
              path="/account"
              element={withSuspense(AccountSettingsPage)}
            />
            <Route path="*" element={withSuspense(ErrorPage)} />
          </Routes>
        </AuthContext.Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
