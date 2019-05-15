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
// import Aside from "../../../../components/aside/StudentAside";

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



    // subscription on change aside state
    // toggleAside = () => {
    //     this.setState({...this.state, asideOpen: !this.state.asideOpen});
    // };

    render() {
        const {asideOpen} = this.state;
        const {subjects} = this.props;

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
                                <span>{subjects.length} Subjects.</span>
                            </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className='subjects'>
                                {
                                    subjects.map((subject: any, k: number) => {
                                        let teachers = "";
                                        if (typeof subject.teachers === 'object') {
                                            subject.teachers.map((t: string, i: number) => {
                                                return teachers += t + (i<subject.teachers.length?', ':'');
                                            })
                                        } else teachers = subject.teachers;
                                        return (
                                            <Card className='subject' key={k}>
                                                <Card.Body>
                                                    <Card.Title>{subject.name}</Card.Title>
                                                    <Card.Subtitle>{subject.type}</Card.Subtitle>
                                                    <Card.Text>
                                                        Teachers: {teachers}
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
    null
)(Subjects);
