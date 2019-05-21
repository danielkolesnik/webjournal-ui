// outsource
import React from 'react';
import { Link } from 'react-router-dom';
import {
    Container,
    Navbar,
    Nav
} from "react-bootstrap";

// local dependencies
import sLogo from '../../assets/s-logo.png';
import {STUDENT_ROUTES} from "../../constants/routes";
import {connect} from "react-redux";
import OutsideClickHandler from "../OutsideClickHandler";
import {APP} from "../../constants/actions";

class StudentHeader extends React.Component<any, any> {

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
                <Container fluid id='sHeader'>
                    <Navbar collapseOnSelect
                            expand='md'
                            onToggle={this.setNavExpanded}
                            expanded={navExpanded}
                    >
                        <Navbar.Brand>
                            <Link onClick={this.closeNav} to={STUDENT_ROUTES.HOME.ROUTE}>
                                <img className='logo' src={sLogo} alt="logotype"/>
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className='ml-auto' onSelect={this.closeNav}>
                                {
                                    Object.keys(STUDENT_ROUTES).map(i => {
                                        // @ts-ignore
                                        const isActive = STUDENT_ROUTES[i].REGEXP.test(location.pathname);
                                        return (
                                            // @ts-ignore
                                            <Nav.Link as={Link} onClick={this.closeNav} key={i} className={`nav-link ${isActive ? 'active' : ''}`} data-alt={STUDENT_ROUTES[i].NAME} to={STUDENT_ROUTES[i].ROUTE}>
                                                {
                                                    // @ts-ignore
                                                    STUDENT_ROUTES[i].NAME
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
}))(StudentHeader);
