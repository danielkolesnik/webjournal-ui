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
            <Container fluid className='s-home-page'>
                <Row className='heading mb-3'>
                    <Col>
                        <h3 className='page-name'>
                            <span>Last Events.</span>
                        </h3>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home;
