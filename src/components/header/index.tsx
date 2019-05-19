// outsource
import React from 'react';
import {connect} from "react-redux";

// local dependencies
import ProfessorHeader from './ProfessorHeader';
import StudentHeader from './StudentHeader';
import ROLES from '../../constants/roles';

type Props = {
    role: string
    location: any
}

const Header = (props: Props) => {
    const {role, location, ...rest} = props;

    switch (role) {
        case ROLES.PROFESSOR:
            // @ts-ignore
            return <ProfessorHeader location={location} {...rest}/>;
        case ROLES.STUDENT:
            // @ts-ignore
            return <StudentHeader location={location} {...rest}/>;
        default:
            return <div>Something bad happened...</div>;
    }
};

export default connect(
    (state:any) => ({
        role: state.app.role
    })
)(Header);
