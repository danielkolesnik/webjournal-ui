// outsource
import React from 'react';
import { Link } from 'react-router-dom';
import {
    Container,
    Navbar,
    Nav
} from "react-bootstrap";

// local dependencies
import pLogo from '../../assets/p-logo.png';
import {PROFESSOR_ROUTES} from "../../constants/routes";
import OutsideClickHandler from '../../components/OutsideClickHandler';
import {APP} from "../../constants/actions";
import {connect} from "react-redux";


class ProfessorHeader extends React.Component<any, any> {

    state = {
        navExpanded: false
    };

    setNavExpanded = (expanded: boolean) => this.setState({ navExpanded: expanded });

    closeNav = () => this.setState({ navExpanded: false });

    render() {
        const {navExpanded} = this.state;
        const {location} = this.props;
        // @ts-ignore
        return (<OutsideClickHandler onClickOutside={this.closeNav}>
            <Container fluid id='pHeader'>
                <Navbar collapseOnSelect
                        expand='md'
                        onToggle={this.setNavExpanded}
                        expanded={navExpanded}
                >
                    <Navbar.Brand>
                        <Link to={PROFESSOR_ROUTES.HOME.ROUTE}>
                            <img className='logo' src={pLogo} alt="logotype"/>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='ml-auto' onSelect={this.closeNav}>
                            {
                                Object.keys(PROFESSOR_ROUTES).map(i => {
                                    // @ts-ignore
                                    const isActive = PROFESSOR_ROUTES[i].REGEXP.test(location.pathname);
                                    return (
                                        // @ts-ignore
                                        <Nav.Link as={Link} onClick={this.closeNav} key={i} className={`nav-link ${isActive ? 'active' : ''}`} data-alt={PROFESSOR_ROUTES[i].NAME} to={PROFESSOR_ROUTES[i].ROUTE}>
                                            {
                                                // @ts-ignore
                                                PROFESSOR_ROUTES[i].NAME
                                            }
                                        </Nav.Link>
                                    )
                                })
                            }
                            <span className='nav-link logout-btn'
                                  data-alt='Logout'
                                  onClick={this.props.logout}
                            >
                                Logout
                            </span>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </OutsideClickHandler>
        )
    }
}

export default connect(
    null,
    dispatch => ({
        logout: ()=>dispatch({type: APP.LOG_OUT})
}))(ProfessorHeader);
