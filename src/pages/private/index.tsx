// outsource
import React from 'react';
import {connect} from "react-redux";
import {Redirect, Route, Switch} from "react-router-dom";

// local dependencies
import ROLES from '../../constants/roles';
import {PUBLIC, PROFESSOR_ROUTES, STUDENT_ROUTES} from "../../constants/routes";

// Professor routes
import ProfessorLayout from "./professor";

// Student routes
import StudentLayout from "./student";
import Home from "./professor/home";
import Subjects from "./professor/subjects";
import Groups from "./professor/groups";

type Props = {
    preloader?: boolean
    location?: any
    auth?: boolean
    role: string
}

function PrivateLayout(props: Props) {
    let { location, auth, role } = props;

    if ( !auth ) return (<Redirect push to={{ pathname: PUBLIC, state: { from: location, page: 'public' } }}/>);

    switch(role) {
        case ROLES.PROFESSOR:
            return (
                <ProfessorLayout>
                    <Switch>
                        <Route exact path={PROFESSOR_ROUTES.HOME.ROUTE} component={Home}/>
                        <Route exact path={PROFESSOR_ROUTES.SUBJECTS.ROUTE} component={Subjects}/>
                        <Route exact path={PROFESSOR_ROUTES.GROUPS.ROUTE} component={Groups}/>
                    </Switch>
                </ProfessorLayout>
            );
        case ROLES.STUDENT:
            return (
                <Switch>
                    <Route path={STUDENT_ROUTES.HOME.ROUTE} component={StudentLayout}/>
                </Switch>
            );
        default:
            return <div>Something happened in the authentication step, please try re-login</div>
    }
}

export default connect(
    (state: any)=>({
        auth: state.app.auth,
        role: state.app.role
    }),
    null
)(PrivateLayout);