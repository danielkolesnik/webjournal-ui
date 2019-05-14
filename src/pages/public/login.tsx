// outsource
import React from 'react'
import { connect } from 'react-redux';
import {
    Button,
    Form
} from "react-bootstrap";
import { IoMdClose } from 'react-icons/io';


// local dependencies
import StudentImg from '../../assets/pages/public/student.png';
import ProfessorImg from '../../assets/pages/public/professor.png';
import ROLES from '../../constants/roles';

type Props = {
    authorizationS?: any
    authorizationP?: any
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
        const { authorizationS, authorizationP } = this.props;

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
                            <Form>
                                <Form.Label>Student number</Form.Label>
                                <Form.Control type='email' placeholder='Enter student number'/>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type='password' placeholder='Enter password'/>
                                <Button onClick={authorizationS} className='submit-btn' variant="outline-info" block>Login</Button>
                            </Form>
                        </div>
                        <div className='professor-form'>
                            <Form>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type='email' placeholder='Enter email'/>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type='password' placeholder='Enter password'/>
                                <Button onClick={authorizationP} className='submit-btn' variant="outline-info" block>Login</Button>
                            </Form>
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
        authorizationP: () => dispatch({type: 'authorization', payload: { role: ROLES.PROFESSOR }}),
        authorizationS: () => dispatch({type: 'authorization', payload: { role: ROLES.STUDENT }})
    })
)(PublicLayout);
