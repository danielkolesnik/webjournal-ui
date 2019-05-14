// outsource
import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

// local dependencies

class Subjects extends React.Component {
    render() {
        return (
            <Container fluid className='p-subjects-page'>
                <Row className='heading'>
                    <Col>
                        <h2 className='page-name'>
                            <span>Subjects.</span>
                        </h2>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Subjects;
