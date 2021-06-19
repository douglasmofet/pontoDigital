import React, { Fragment } from 'react';
import { HashRouter } from 'react-router-dom';
import { Pages } from './pages';

import GlobalStyle from './assets/styles/global';
import AppProvider from './hooks';

export function App() {
  return (
    <Fragment>

      <HashRouter>
        <AppProvider>
          <Pages />
        </AppProvider>
      </HashRouter>

      <GlobalStyle />
    </Fragment>
  );
}