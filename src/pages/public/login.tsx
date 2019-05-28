// outsource
import React from 'react'
import { connect } from 'react-redux';
import {
    Button,
    Form
} from "react-bootstrap";
import { IoMdClose } from 'react-icons/io';
import {reduxForm} from "redux-form";

// local dependencies
import StudentImg from '../../assets/pages/public/student.png';
import ProfessorImg from '../../assets/pages/public/professor.png';
import ROLES from '../../constants/roles';
import {SIGN_IN} from '../../constants/actions';
import AuthForm from '../../components/AuthForm';

type Props = {
    authStudent?: any
    authProfessor?: any
    location?: any
    auth?: any
}

type State = {
    hoveredPerson: string,
    isHovered: boolean
}

class PublicLayout extends React.Component<Props, State> {

    state: State = {
        hoveredPerson: '',
        isHovered: false
    };

    // adding CSS class to wrapper
    personHovered = (e: any, person: string) => {
        this.setState({...this.state, isHovered: true, hoveredPerson: person});
    };

    personUnHovered = (e: any) => {
        this.setState({...this.state, isHovered: false, hoveredPerson: ''});
    };

    render() {
        const {isHovered, hoveredPerson } = this.state;
        const { authProfessor, authStudent } = this.props;

        return (
            <section id='loginPage'>
                <div className={`choice-wrapper` + (isHovered? ` ${hoveredPerson}-hovered`: '')}
                     style={isHovered ?
                         hoveredPerson==='student' ?
                             {backgroundPositionX: window.innerWidth*0.5} :
                             {backgroundPositionX: -(window.innerWidth*0.5)} :
                         {}
                     }
                />
                <div className={'choices-holder' + (isHovered? ` ${hoveredPerson}-hovered`: '')}>
                    <div className='student-wrapper'
                         onMouseOver={(e)=>this.personHovered(e, 'student')}
                    >
                        <h2>Student</h2>
                        <img className='person-img'
                             src={StudentImg}
                             alt='Student'
                        />
                    </div>
                    <div className='professor-wrapper'
                         onMouseOver={(e)=>this.personHovered(e, 'professor')}
                    >
                        <h2>Professor</h2>
                        <img className='person-img'
                             src={ProfessorImg}
                             alt='Professor'
                        />
                    </div>
                    <div className='discard-btns-holder'>
                        <IoMdClose onClick={this.personUnHovered}/>
                    </div>
                    <div className='forms-wrapper'>
                        <div className='student-form'>
                            {/*
                            //@ts-ignore*/}
                            <AuthForm authorize={authStudent} labelPrefix='student'/>
                        </div>
                        <div className='professor-form'>
                            {/*
                            //@ts-ignore*/}
                            <AuthForm authorize={authProfessor} labelPrefix='professor'/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default connect(
    (state: any) => ({
        auth: state.app.auth
    }),
    dispatch => ({
        authProfessor: (values: any) => dispatch({type: SIGN_IN.LOG_IN.REQUEST, payload: { values, role: ROLES.PROFESSOR }}),
        authStudent: (values: any) => dispatch({type: SIGN_IN.LOG_IN.REQUEST, payload: { values, role: ROLES.STUDENT }})
    })
)(PublicLayout);
