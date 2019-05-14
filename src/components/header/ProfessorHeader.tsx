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
// import pLogo from '../../assets/p-logo.png';
import pLogo from '../../assets/p-logo.png';
import {PROFESSOR_ROUTES} from "../../constants/routes";

function ProfessorHeader(props: any) {
    return (
        <Container fluid id='pHeader'>

            <Navbar collapseOnSelect expand='md'>
                <Navbar.Brand>
                    <Link to={PROFESSOR_ROUTES.HOME.ROUTE}>
                        <img className='logo' src={pLogo} alt=""/>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='ml-auto'>
                        {
                            Object.keys(PROFESSOR_ROUTES).map(i => {
                                if(i!=='HOME') return (
                                    // @ts-ignore
                                    <Link key={i} className='nav-link' to={PROFESSOR_ROUTES[i].ROUTE}>{PROFESSOR_ROUTES[i].NAME}</Link>
                                )
                            })
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}

export default ProfessorHeader;