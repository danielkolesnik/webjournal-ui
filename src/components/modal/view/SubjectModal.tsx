// outsource
import React from 'react';
import {Button, Col, ListGroup, ModalBody, ModalFooter, ModalTitle, Row} from "react-bootstrap";
import {SubjectDTO} from "../../../types/student/Subject";
import {connect} from 'react-redux';
import {STUDENT} from "../../../constants/actions";
import Preloader from "../../Preloader";
import {MarkEvent, MarkEventDTO} from "../../../types/student/Event";

// local dependencies


type Props = {
    subject: SubjectDTO
    closeModal: ()=>any
    unmount: ()=>any
    initialize: (id: number)=>any
    subjectId: number
}

class SubjectModal extends React.Component<Props, any> {

    componentDidMount() {
        this.props.initialize(this.props.subjectId);
    }

    componentWillUnmount() {
        this.props.unmount();
    }

    render() {
        const {subject, closeModal} = this.props;
        let professors = "";
        let points = 0;
        let isGood, isBad;
        if(subject!==null) {
            for(let e of subject.lastEvents) {
                points+=e.points;
            }
            isGood = 100 > points;
            isBad = 75 < points;
            subject.professors.map((t: any, i: number) => {
                console.log(t);
                return professors += t.last_name + (i+1!==subject.professors.length?', ':'');
            });
        }

        return [
            <ModalTitle key='base-title'>
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
                                <p className="teachers">{professors}</p>
                            </Col>
                            <Col md={4} xs={5} className='d-flex flex-row-reverse'>
                                <p className="points"><span className={`user-mark ${isBad? 'bad': isGood? 'good': ''}`}>{points}</span> / 100</p>
                            </Col>
                        </Row>
                }
                <ModalTitle key='l-title'>
                    Upcoming Events
                </ModalTitle>
                <ListGroup className='mb-3'>
                    {
                        subject!==null&&subject.upcomingEvents.map((ev, i) => {
                            return (
                                <ListGroup.Item variant="primary" key={'l'+i}>
                                    <Row>
                                        <Col>
                                            <p>{ev.name}</p>
                                            <div className="dates">
                                                <p className="event-date">Passing Date:</p><p className="value">{ev.date}</p>
                                                <p className="max-points">Maximum Points:</p><p className="value">{ev.maxPoints}</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            );
                        })
                    }
                </ListGroup>
                <ModalTitle key='h-title'>
                    Last Events
                </ModalTitle>
                <ListGroup>
                {
                    subject!==null&&subject.lastEvents.map((ev, i) => {
                        let {points, evaluationDate} = ev as MarkEventDTO;
                        let badRes = ev.maxPoints/2 > points;
                        let goodRes = ev.maxPoints*0.75 < points;
                        return (
                          <ListGroup.Item variant={badRes?'danger':goodRes? 'success': 'primary'} key={'u'+i}>
                            <Row>
                                <Col>
                                    <p className="subject-name">{ev.name}</p>
                                </Col>
                                <Col md={3} xs={5} className='d-flex flex-row-reverse'>
                                    <p className="points"><span className={`user-mark ${badRes? 'bad': goodRes? 'good': ''}`}>{points}</span> / {ev.maxPoints}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="dates">
                                        <p className="event-date">Passed On:</p><p className="value">{ev.date}</p>
                                        <p className="event-date">Evaluated On:</p><p className="value">{evaluationDate}</p>
                                    </div>
                                </Col>
                            </Row>
                          </ListGroup.Item>
                        );
                    })
                }
                </ListGroup>
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
        initialize: (subjectId: number) => dispatch({type: STUDENT.SUBJECTS.GET_SUBJECT.REQUEST, payload: subjectId}),
        unmount: () => dispatch({type: STUDENT.SUBJECTS.CLEAR_MODAL})
    })
)(SubjectModal);
