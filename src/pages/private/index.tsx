// outsource
import React from 'react';
import {connect} from "react-redux";
import {Redirect, Route, Switch} from "react-router-dom";

// local dependencies
import ROLES from '../../constants/roles';
import {PUBLIC, PROFESSOR_ROUTES, STUDENT_ROUTES} from "../../constants/routes";

// Professor routes
import ProfessorLayout from "./professor";
import HomeP from "./professor/home";
import SubjectsP from "./professor/subjects";
import GroupsP from "./professor/groups";

// Student routes
import StudentLayout from "./student";
import HomeS from "./student/home";
import SubjectsS from "./student/subjects";

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
                <ProfessorLayout location={location}>
                    <Switch>
                        <Route exact path={PROFESSOR_ROUTES.HOME.ROUTE} component={HomeP}/>
                        <Route exact path={PROFESSOR_ROUTES.SUBJECTS.ROUTE} component={SubjectsP}/>
                        <Route exact path={PROFESSOR_ROUTES.GROUPS.ROUTE} component={GroupsP}/>
                    </Switch>
                </ProfessorLayout>
            );
        case ROLES.STUDENT:
            return (
                <StudentLayout location={location}>
                    <Switch>
                        <Route path={STUDENT_ROUTES.HOME.ROUTE} component={HomeS}/>
                        <Route path={STUDENT_ROUTES.SUBJECTS.ROUTE} component={SubjectsS}/>
                    </Switch>
                </StudentLayout>
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
