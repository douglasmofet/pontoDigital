import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useAuth } from '../hooks/auth';
import { getLazyLoadContainerFor } from '../lib/lazyLoading';

export function Pages() {
  const { user } = useAuth();
  const AdminModulePages = getLazyLoadContainerFor(() => import('./admin/'));
  // const EntrancesPage = getLazyLoadContainerFor(() => import('./admin/entrances/'));

  const SharedModulePages = getLazyLoadContainerFor(() => import('./shared/'));

  return (
    <React.Fragment>
      <Switch>
        {
          user &&
          [
            <Route path={'/admin'} component={AdminModulePages} />,
            // <Route path={'/admin/entrances'} component={EntrancesPage} />
          ]
        }
        <Route path={'/'} component={SharedModulePages} />
      </Switch>
    </React.Fragment>
  )
}