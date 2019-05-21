// outsource
import React from 'react';
import {Button, Col, ModalBody, ModalFooter, ModalTitle, Row} from "react-bootstrap";
import {connect} from 'react-redux';
import {UpcomingEvent, MarkEvent, isMark} from "../../../types/student/Event";

// local dependencies


type Props = {
    event: UpcomingEvent|MarkEvent
    closeModal: ()=>any
}



class EventModal extends React.Component<Props, any> {

    render() {
        const {event, closeModal} = this.props;
        let teachers = "";
        event.subject.teachers.map((t: string, i: number) => {
            return teachers += t + (i<event.subject.teachers.length?', ':'');
        });
        let Body = (
            <ModalBody key='body'>
                <Row>
                    <Col>
                        <p className="subject-name">{event.subject.name}</p>
                        <p className="teachers">{teachers}</p>
                    </Col>
                    <Col md={3} xs={5} className='d-flex flex-row-reverse'>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="dates">
                            <p className="event-date">Passing Date:</p><p className="value">{event.date}</p>
                            <p className="max-points">Maximum Points:</p><p className="value">{event.maxPoints}</p>
                        </div>
                    </Col>
                </Row>
            </ModalBody>
        );

        if(isMark(event)) {
            let {points, evaluationDate} = event as MarkEvent;
            let badRes = event.maxPoints/2 > points;
            let goodRes = event.maxPoints*0.75 < points;
            Body = (
                <ModalBody key='body'>
                    <Row>
                        <Col>
                            <p className="subject-name">{event.subject.name}</p>
                            <p className="teachers">{teachers}</p>
                        </Col>
                        <Col md={3} xs={5} className='d-flex flex-row-reverse'>
                            <p className="points"><span className={`user-mark ${badRes? 'bad': goodRes? 'good': ''}`}>{points}</span> / {event.maxPoints}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="dates">
                                <p className="event-date">Passed On:</p><p className="value">{event.date}</p>
                                <p className="event-date">Evaluated On:</p><p className="value">{evaluationDate}</p>
                            </div>
                        </Col>
                    </Row>
                </ModalBody>
            );
        }

        return [
            <ModalTitle key='title'>
                {event.name}
            </ModalTitle>,
            Body,
            <ModalFooter key='footer'>
                <Button variant="outline-danger" onClick={closeModal}>Close</Button>
            </ModalFooter>
        ]
    }
}

export default EventModal;
