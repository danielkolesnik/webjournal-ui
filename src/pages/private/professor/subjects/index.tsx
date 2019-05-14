// outsource
import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

// local dependencies

class Subjects extends React.Component {
    render() {
        return (
            <Container fluid className='p-home-page'>
                <Row className='heading'>
                    <Col><h2>Subjects Page</h2></Col>
                </Row>
            </Container>
        )
    }
}

export default Subjects;