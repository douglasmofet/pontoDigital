import React, { Fragment } from 'react';
import { HashRouter } from 'react-router-dom';
import { Pages } from './pages';

import GlobalStyle from './assets/styles/global';

export function App() {
  return (
    <Fragment>
        <HashRouter>
          <Pages />
        </HashRouter>

        <GlobalStyle />
    </Fragment>
  );
}