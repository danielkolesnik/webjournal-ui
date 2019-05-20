// outsource
import React from 'react';
import {Button, Col, ModalBody, ModalFooter, ModalTitle, Row} from "react-bootstrap";
import {SubjectDTO} from "../../../types/student/Subject";
import {isMarkDTO, MarkEvent, MarkEventDTO} from "../../../types/student/Event";
import {connect} from 'react-redux';
import {STUDENT} from "../../../constants/actions";
import Preloader, {NumberPreloader} from "../../Preloader";

// local dependencies


type Props = {
    subject: SubjectDTO
    closeModal: ()=>any
    initialize: (id: number)=>any
    subjectId: number
}

class SubjectModal extends React.Component<Props, any> {

    componentDidMount() {
        this.props.initialize(this.props.subjectId);
    }

    render() {
        const {subject, closeModal} = this.props;


        return [
            <ModalTitle key='title'>
                {subject===null? 'Subject' : subject.name}
            </ModalTitle>,
            <ModalBody key='body'>
                <Preloader isOpen={subject===null}/>
                {
                    subject===null ?
                        'd-none'
                    :
                        <Row className={subject===null ? 'd-none' : ''}>
                            <Col>
                                <p className="teachers">{subject.teachers}</p>
                            </Col>
                            <Col md={3} xs={5} className='d-flex flex-row-reverse'>
                            </Col>
                        </Row>
                }
                {
                    subject!==null&&subject.upcomingEvents.map((ev, i) => {
                        return (
                            <Row>
                                <Col>
                                    <p>{ev.name}</p>
                                    <div className="dates">
                                        <p className="event-date">Passing Date:</p><p className="value">{ev.date}</p>
                                        <p className="max-points">Maximum Points:</p><p className="value">{ev.maxPoints}</p>
                                    </div>
                                </Col>
                            </Row>
                        );
                    })
                }
                {
                    subject!==null&&subject.lastEvents.map((ev, i) => {
                        return (
                            <Row>
                                <Col>
                                    <p>{ev.name}</p>
                                    <div className="dates">
                                        <p className="event-date">Passed On:</p><p className="value">{ev.date}</p>
                                        <p className="event-date">Evaluated On:</p><p className="value">{ev.evaluationDate}</p>
                                    </div>
                                </Col>
                            </Row>
                        );
                    })
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
        subject: state.subjectsS.subject
    }),
    dispatch => ({
        initialize: (subjectId: number) => dispatch({type: STUDENT.SUBJECTS.GET_SUBJECT.REQUEST, payload: subjectId})
    })
)(SubjectModal);
