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
                <Row>
                    <Col>
                        CONTENT
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home;
