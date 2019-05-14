// outsource
import React from 'react';
import {connect} from "react-redux";

// local dependencies
import ProfessorHeader from './ProfessorHeader';
import StudentHeader from './StudentHeader';
import ROLES from '../../constants/roles';

type Props = {
    role?: string
}

const Header = (props: Props) => {
    const {role, ...rest} = props;

    switch (role) {
        case ROLES.PROFESSOR:
            return <ProfessorHeader {...rest}/>;
        case ROLES.STUDENT:
            return <StudentHeader {...rest}/>;
        default:
            return <div>Something bad happened...</div>;
    }
};

export default connect(
    (state:any) => ({
        role: state.app.role
    })
)(Header);