// outsource
import React from 'react';
import { Link } from 'react-router-dom';
import {
    Container,
    Navbar,
    NavDropdown,
    Nav
} from "react-bootstrap";

// local dependencies
import pLogo from '../../assets/s-logo.png';
import {STUDENT_ROUTES} from "../../constants/routes";
import {connect} from "react-redux";

function StudentHeader (props: any) {
    return (
        <Container fluid id='sHeader'>

            <Navbar collapseOnSelect expand='md'>
                <Navbar.Brand>
                    <Link to={STUDENT_ROUTES.HOME.ROUTE}>
                        <img className='logo' src={pLogo} alt=""/>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='ml-auto'>
                        {
                            Object.keys(STUDENT_ROUTES).map(i => {
                                // @ts-ignore
                                const isActive = STUDENT_ROUTES[i].REGEXP.test(props.location.pathname);
                                return (
                                    // @ts-ignore
                                    <Link key={i} className={`nav-link ${isActive?'active':''}`} data-alt={STUDENT_ROUTES[i].NAME} to={STUDENT_ROUTES[i].ROUTE}>{STUDENT_ROUTES[i].NAME}</Link>
                                )
                            })
                        }
                        <span className='nav-link logout-btn' data-alt='Logout'>Logout</span>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}

export default connect(
    null,
    dispatch => ({
        logout: ()=>dispatch({type: 'LOGOUT'})
}))(StudentHeader);
