// outsource
import React from 'react';
import {
    Container,
    Row,
    Col, Card, Button
} from "react-bootstrap";
import {connect} from "react-redux";
import AliceCarousel from 'react-alice-carousel';
import {IoIosArrowDropleft, IoIosArrowDropright} from 'react-icons/io';

// local dependencies
import Preloader, {NumberPreloader} from "../../../../components/Preloader";
import {ExamEvent, MarkEvent, Event} from "../../../../types/student/Event";
import {STUDENT, MODAL} from "../../../../constants/actions";

class Home extends React.Component<any, any> {
    state = {
        carouselSizes: {
            320: {items: 1},
            // 576: {items: 2},
            768: {items: 2},
            992: {items: 3},
            1200: {items: 4},
        },
        carouselIndex: 0,
        carouselItems: []
    };

    componentDidMount() {
        this.props.initialize();
    }

    openEvent = (e:any, event: ExamEvent|MarkEvent) => {
        console.log(e.type);
    };

    handleOnDragStart = (e:any) => e.preventDefault();

    componentWillReceiveProps(nextProps:any) {
        if(this.props !== nextProps) {
            let carouselItems = nextProps.upcomingEvents.map((event:MarkEvent|ExamEvent, k: number) => {
                return (
                    <Card className='event' key={k}
                          onClick={(e:any)=>this.openEvent(e, event)}
                          onDragStart={this.handleOnDragStart}
                    >
                        <Card.Body>
                            <Card.Title>{event.name}</Card.Title>
                            <Card.Subtitle>{event.type}</Card.Subtitle>
                            <Card.Text>
                                Some content
                            </Card.Text>
                        </Card.Body>
                    </Card>

                )
            });
            this.setState({...this.state, carouselItems});
        }
    }

    onSlideChanged = (e: any) => this.setState({...this.state, carouselIndex: e.item });

    slideNext = () => this.setState({...this.state, carouselIndex: this.state.carouselIndex + 1 });

    slidePrev = () => this.setState({...this.state, carouselIndex: this.state.carouselIndex - 1 });

    render() {
        const {lastEvents, upcomingEvents, preloader} = this.props;
        const {carouselSizes, carouselIndex, carouselItems} = this.state;

        return (
            <Container fluid className='s-home-page'>
                <Row className={`heading mb-3 ${!preloader.lastEvents && !lastEvents.length? 'd-none': ''}`}>
                    <Col>
                        <h3 className='page-name'>
                            <span><NumberPreloader isOpen={preloader.lastEvents} number={lastEvents.length}/> Last Events.</span>
                        </h3>
                    </Col>
                </Row>
                <Row className={!preloader.lastEvents && !lastEvents.length? 'd-none': ''}>
                    <Col>
                        <div className="last-events">
                            <Preloader isOpen={preloader.lastEvents}/>
                            {
                                lastEvents.map((event:MarkEvent|ExamEvent, k: number) => {
                                    return (
                                        <Card className='event' key={k} onClick={(e:any)=>this.openEvent(e, event)}>
                                            <Card.Body>
                                                <Card.Title>{event.name}</Card.Title>
                                                <Card.Text>
                                                    Some content
                                                </Card.Text>
                                                <Card.Subtitle>{event.type}</Card.Subtitle>
                                            </Card.Body>
                                        </Card>

                                    )
                                })
                            }
                        </div>
                    </Col>
                </Row>
                <Row className={`heading mb-3 ${!preloader.upcomingEvents && !upcomingEvents.length? 'd-none': ''}`}>
                    <Col>
                        <h3 className='page-name'>
                            <span><NumberPreloader isOpen={preloader.upcomingEvents} number={upcomingEvents.length}/> Upcoming Events.</span>
                        </h3>
                    </Col>
                </Row>
                <Row className={!preloader.upcomingEvents && !upcomingEvents.length? 'd-none': ''}>
                    <Col>
                        <div className="upcoming-events">
                            <Preloader isOpen={preloader.upcomingEvents}/>
                            <div className='carousel-wrapper'>
                                <AliceCarousel dotsDisabled={true}
                                               buttonsDisabled={true}
                                               items={carouselItems}
                                               responsive={carouselSizes}
                                               slideToIndex={carouselIndex}
                                               onSlideChanged={this.onSlideChanged}
                                               mouseDragEnabled
                                />
                                <IoIosArrowDropleft className='carousel-ctrl-btn left' onClick={this.slidePrev}/>
                                <IoIosArrowDropright className='carousel-ctrl-btn right' onClick={this.slideNext}/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default connect(
    (state: any) =>({
        ...state.homeS
    }),
    dispatch => ({
        initialize: () => dispatch({type: STUDENT.HOME.INITIALIZE})
    })
)(Home);
