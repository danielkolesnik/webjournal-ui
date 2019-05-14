// outsource
import React from 'react'
import { connect } from 'react-redux';
import {Redirect, Route, Switch} from "react-router-dom";

// local dependencies
import ROLES from '../../constants/roles';
import * as ROUTES from "../../constants/routes";
import LoginPage from './login';

type Props = {
    auth: boolean
    location: any
    role: string
}


function PublicLayout(props: Props) {

    const {auth, location, role} = props;

    if ( auth ) return (
        <Redirect to={{
            pathname: role === ROLES.PROFESSOR ? ROUTES.P_HOME.ROUTE : ROUTES.S_HOME.ROUTE,
            state: { from: location }
        }}/>
    );

    return (
        <div id='public'>
            <Switch>
                <Route component={LoginPage}/>
            </Switch>
        </div>
    )
}

export default connect(
    (state: any) => ({
        auth: state.app.auth,
        role: state.app.role
    }),
    null
)(PublicLayout);
