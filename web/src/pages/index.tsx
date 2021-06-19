import * as React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { Navbar } from '../components/environment/navbar';
import { useAuth } from '../hooks/auth';
import { getLazyLoadContainerFor } from '../lib/lazyLoading';
import { mainMenu } from './menu';


export function Pages() {
    const { user } = useAuth();
    const AdminModulePages = getLazyLoadContainerFor(() => import('./admin/'));
    const SharedModulePages = getLazyLoadContainerFor(() => import('./shared/'));

    console.log('Pages', user);

    return (
        <React.Fragment>
            {/* <Navbar items={mainMenu} onNavigate={push} /> */}
            <Switch>
                {
                    user &&
                    <Route path={'/admin'} component={AdminModulePages} />
                }
                <Route path={'/'} component={SharedModulePages} />
            </Switch>
        </React.Fragment>
    )
}