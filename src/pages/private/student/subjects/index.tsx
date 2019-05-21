// outsource
import React from 'react';
import {
    Col,
    Container,
    Row,
    Card,
} from "react-bootstrap";
import {connect} from "react-redux";
import {IoIosInfinite} from 'react-icons/io';

// local dependencies
// import Aside from "../../../../components/aside/StudentAside";
import {STUDENT, MODAL} from "../../../../constants/actions";
import {STUDENT_MODAL} from "../../../../components/modal/view";
import Subject from "../../../../types/student/Subject";
import Preloader, {NumberPreloader} from "../../../../components/Preloader";

/**
 * TODO:
 *  - refactor subjects view;
 *  - add aside items;
 */
class Subjects extends React.Component<any, any> {
    state = {
        // aside state
        asideOpen: false
    };

    componentDidMount() {
        this.props.initialize();
    }

    openSubject = (subject: Subject) => {
        this.props.showModal(STUDENT_MODAL.SUBJECT, {
            subjectId: subject.id,
            open: true,
            size: 'lg'
        })
    };
    // subscription on change aside state
    // toggleAside = () => {
    //     this.setState({...this.state, asideOpen: !this.state.asideOpen});
    // };

    render() {
        const {asideOpen} = this.state;
        const {subjects, preloader} = this.props;

        // const MENU_ITEMS = [
        //     {
        //         name: "",
        //         callback: () => {
        //
        //         }
        //     },
        //     {
        //         name: "",
        //         callback: () => {
        //
        //         }
        //     },
        //     {
        //         name: "",
        //         callback: () => {
        //
        //         }
        //     },
        // ];

        return (
            <div className={`s-subjects-page ${asideOpen?'aside-open':''}`}>
                <Container fluid>
                    {/*<Aside*/}
                        {/*items={[{name: 'Do useful thing', callback: ()=>{}}]}*/}
                        {/*isOpenValue={asideOpen}*/}
                        {/*toggler={this.toggleAside}*/}
                    {/*/>*/}
                    <Row className='heading mb-3'>
                        <Col>
                            <h3 className='page-name'>
                                <span><NumberPreloader isOpen={preloader} number={subjects.length}/> Subjects.</span>
                            </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Preloader isOpen={preloader}/>
                            <div className='subjects'>
                                {
                                    subjects.map((subject: any, k: number) => {
                                        let teachers = "";
                                        subject.teachers.map((t: string, i: number) => {
                                            return teachers += t + (i < subject.teachers.length? ', ':'');
                                        });
                                        return (
                                            <Card className='subject' key={k} onClick={()=>this.openSubject(subject)}>
                                                <Card.Body>
                                                    <Card.Title>{subject.name}</Card.Title>
                                                    <Card.Subtitle>{subject.type}</Card.Subtitle>
                                                    <Card.Text>
                                                        Teachers:
                                                    </Card.Text>
                                                    <Card.Text>
                                                        {teachers}
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        )
                                    })
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default connect(
    (state:any)=>({
        ...state.subjectsS
    }),
    dispatch => ({
        // hideModal: () => dispatch({type: MODAL.HIDE}),
        showModal: (modalType: string, modalProps: any) => dispatch({type: MODAL.SHOW, payload: {modalProps, modalType}}),
        initialize: () => dispatch({type: STUDENT.SUBJECTS.INITIALIZE})

    })
)(Subjects);
