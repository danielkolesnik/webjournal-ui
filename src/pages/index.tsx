// @flow
// outsource
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { connect } from 'react-redux';

// local dependencies
import { history } from '../store';
import * as ROUTES from '../constants/routes';
// import logo from '../assets/logo.svg';
import PublicLayout from './public';
import PrivateLayout from './private';

type State = {

}

type Props = {
    location?: any,
}

class AppRoot extends React.Component<Props, State> {
    render() {
        const { location } = this.props;
        // if( preloader ) return (<img src={logo} className="app-loader" alt="logo" />);


        return (
            <main id='router'>
                <ConnectedRouter history={history}>
                    <Switch>
                        <Route path={ROUTES.PRIVATE} component={PrivateLayout}/>
                        <Route path={ROUTES.PUBLIC} component={PublicLayout}/>
                        <Redirect to={{ pathname: ROUTES.PUBLIC, state: { from: location, page: 'public' } }}/>
                    </Switch>
                </ConnectedRouter>
            </main>
        );
    }
}

export default connect(null, null)(AppRoot);