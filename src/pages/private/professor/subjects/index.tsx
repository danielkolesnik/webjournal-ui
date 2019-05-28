// outsource
import React from 'react';
import {
    Col,
    Container,
    Row,
    Card,
} from "react-bootstrap";
import {connect} from "react-redux";

// local dependencies
import Aside from "../../../../components/aside/StudentAside";
import {MODAL, PROFESSOR} from "../../../../constants/actions";
import {Subject} from "../../../../types/student/Subject";
import {PROFESSOR_MODAL} from "../../../../components/modal/view";
import {NumberPreloader} from "../../../../components/Preloader";
import Preloader from "../../../../components/Preloader";


class Subjects extends React.Component<any, any> {
    state = {
        // aside state
        asideOpen: false,
        // aside menu items
        MENU_ITEMS: []
        // MENU_ITEMS: [
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
    };

    componentDidMount() {
        this.props.initialize();
    }

    openSubject = (subject: Subject) => {
        this.props.showModal(PROFESSOR_MODAL.SUBJECT, {
            subjectId: subject.id,
            open: true,
            size: 'lg'
        })
    };

    // subscription on change aside state
    toggleAside = () => {
        this.setState({...this.state, asideOpen: !this.state.asideOpen});
    };

    render() {
        const {asideOpen, MENU_ITEMS} = this.state;
        const {subjects, preloader} = this.props;
        console.log(this.props);

        return (
            <Container fluid className={`p-subjects-page ${asideOpen?'aside-open':''}`}>
                {
                    MENU_ITEMS.length ?
                        <Aside
                            items={[{name: 'Do useful thing', callback: ()=>{}}]}
                            isOpenValue={asideOpen}
                            toggler={this.toggleAside}
                        />
                    :
                        null
                }
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
                                    let professors = "";
                                    subject.professors.map((t: any, i: number) => {
                                        return professors += t.last_name + (i < subject.professors.length? ', ':'');
                                    });
                                    return (
                                        <Card className='subject' key={k} onClick={()=>this.openSubject(subject)}>
                                            <Card.Body>
                                                <Card.Title>{subject.name}</Card.Title>
                                                <Card.Subtitle>{subject.type}</Card.Subtitle>
                                                <Card.Text>
                                                    teachers:
                                                </Card.Text>
                                                <Card.Text>
                                                    {professors}
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
        )
    }
}

export default connect(
    (state:any)=>({
        ...state.subjectsP
    }),
    dispatch => ({
        hideModal: () => dispatch({type: MODAL.HIDE}),
        showModal: (modalType: string, modalProps: any) => dispatch({type: MODAL.SHOW, payload: {modalProps, modalType}}),
        initialize: () => dispatch({type: PROFESSOR.SUBJECTS.INITIALIZE})

    })
)(Subjects);
