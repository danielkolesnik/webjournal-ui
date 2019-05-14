// outsource
import React from 'react';
import {
    Container,
    Row,
    Col
} from "react-bootstrap";
// local dependencies

class Home extends React.Component {
    render() {
        return (
            <Container fluid className='p-home-page'>
                <Row className='heading'>
                    <Col><h2>Home page</h2></Col>
                </Row>
            </Container>
        )
    }
}

export default Home;