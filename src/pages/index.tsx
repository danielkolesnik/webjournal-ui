// @flow
// outsource
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { connect } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';

// local dependencies
// import logo from '../assets/logo.svg';
import { history } from '../store';
import * as ROUTES from '../constants/routes';
import PublicLayout from './public';
import PrivateLayout from './private';
import ModalContainer from '../components/modal';


type Props = {
    location?: any,
}

class AppRoot extends React.Component<Props, any> {
    render() {
        const { location } = this.props;
        // if( preloader ) return (<img src={logo} className="app-loader" alt="logo" />);


        return [
            <main id='router' key='root'>
                <ConnectedRouter history={history}>
                    <Switch>
                        <Route path={ROUTES.PRIVATE} component={PrivateLayout}/>
                        <Route path={ROUTES.PUBLIC} component={PublicLayout}/>
                        <Redirect to={{ pathname: ROUTES.PUBLIC, state: { from: location, page: 'public' } }}/>
                    </Switch>
                </ConnectedRouter>
            </main>,
            <ModalContainer key='modal'/>,
            <ReduxToastr key='toastr'
                         timeOut={4000}
                         progressBar={true}
                         newestOnTop={false}
                         position="bottom-right"
                         transitionIn="fadeIn"
                         transitionOut="fadeOut"
                         preventDuplicates={true}
            />

        ];
    }
}

export default connect(null, null)(AppRoot);