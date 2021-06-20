import React, { Fragment } from 'react';
import { HashRouter } from 'react-router-dom';
import { Pages } from './pages';

import GlobalStyle from './assets/styles/global';
import AppProvider from './hooks';
// import { MuiPickersUtilsProvider } from '@material-ui/pickers';
// import MomentUtils from '@date-io/moment';

export function App() {
  return (
    <Fragment>

      <HashRouter>
        <AppProvider>
          {/* <MuiPickersUtilsProvider utils={MomentUtils}> */}
            <Pages />
          {/* </MuiPickersUtilsProvider> */}
        </AppProvider>
      </HashRouter>

      <GlobalStyle />
    </Fragment>
  );
}