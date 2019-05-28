// outsource
import React from 'react';
import {Button, Col, ModalBody, ModalFooter, ModalTitle, Row} from "react-bootstrap";
import {connect} from 'react-redux';
import {UpcomingEvent, MarkEvent, isMark} from "../../../types/student/Event";
import {STUDENT} from "../../../constants/actions";

// local dependencies


type Props = {
    eventId: number
    event: any
    closeModal: ()=>any
    unmount: ()=>any
    initialize: (id: number)=>any
}



class StudentEventModal extends React.Component<Props, any> {

    componentDidMount() {
        this.props.initialize(this.props.eventId);
    }

    componentWillUnmount() {
        this.props.unmount();
    }

    render() {
        const {event, closeModal} = this.props;
        let points = 0;
        let evaluationDate = '';
        let professor = '';
        let badRes = false,
            goodRes = false;
        if(event!==null) {
            professor = event.groupSubjectProfessor.subject_professor.professor.last_name + ' ' +
                event.groupSubjectProfessor.subject_professor.professor.first_name[0] + '.' +
                event.groupSubjectProfessor.subject_professor.professor.patronymic[0] + '.';

            points = event.points;
            evaluationDate = event.evaluationDate;
            badRes = event.maxPoints/2 > points;
            goodRes = event.maxPoints*0.75 < points;
        }
        return [
            <ModalTitle key='title'>
                {event===null? 'Event' : event.name}
            </ModalTitle>,
            <ModalBody key='body'>
                {
                    event!==null ?
                        <Row>
                            <Col>
                                <p className="subject-name">{event.groupSubjectProfessor.subject_professor.subject.name}</p>
                                <p className="teachers">{professor}</p>
                            </Col>
                            <Col md={3} xs={5} className='d-flex flex-row-reverse'>
                                {
                                    event.evaluationDate ?
                                        <p className="points">
                                            <span className={`user-mark ${badRes? 'bad': goodRes? 'good': ''}`}>{points}</span> / {event.maxPoints}
                                        </p>
                                    :
                                        <p className="points">MAX: {event.maxPoints}</p>
                                }
                            </Col>
                        </Row>
                    :
                        null
                }
                {
                    event!==null ?
                        <Row>
                            <Col>
                                {
                                    event.evaluationDate ?
                                        <div className="dates">
                                            <p className="event-date">Passed On:</p><p className="value">{event.date}</p>
                                            <p className="event-date">Evaluated On:</p><p className="value">{evaluationDate}</p>
                                        </div>
                                    :
                                        <div className="dates">
                                            <p className="event-date">Passing Date:</p><p className="value">{event.date}</p>
                                            <p className="max-points">Maximum Points:</p><p className="value">{event.maxPoints}</p>
                                        </div>
                                }
                            </Col>
                        </Row>
                    :
                        null
                }
            </ModalBody>,
            <ModalFooter key='footer'>
                <Button variant="outline-danger" onClick={closeModal}>Close</Button>
            </ModalFooter>
        ]
    }
}

export default connect(
    (state:any) => ({
        event: state.homeS.event
    }),
    dispatch => ({
        initialize: (eventId: number) => dispatch({type: STUDENT.HOME.GET_EVENT.REQUEST, payload: eventId}),
        unmount: () => dispatch({type: STUDENT.HOME.CLEAR_MODAL})
    })
)(StudentEventModal);
