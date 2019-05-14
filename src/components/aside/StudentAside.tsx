// outsource
import React from 'react';
import {connect} from 'react-redux';
import {ListGroup} from "react-bootstrap";
import {FaChevronRight} from "react-icons/fa";

// local dependencies

type State = {
    open: boolean
}

type Props = {
    items?: {name: string, callback?:(...args:any)=>any}[],
    isOpenValue?: boolean,
    toggler?: ()=>any
}

class Aside extends React.Component<Props, State> {
    state = {
        open: false
    };

    toggleAside = () => {
        this.setState({...this.state, open: !this.state.open});
    };

    render() {
        const {open} = this.state;
        const {items, isOpenValue, toggler} = this.props;
        let isOpen = isOpenValue!==undefined ? isOpenValue : open;
        let toggle = toggler || this.toggleAside;
        if(items&&items.length) {
            return (
                <aside id='aside' className={isOpen? 'active' : ''}>
                    <div className='open-btn' onClick={toggle}><FaChevronRight color='white'/></div>
                    <ListGroup variant="flush">
                        {
                            items.map((item, k) => {
                                return (
                                    <ListGroup.Item action key={k} onClick={item.callback}>{item.name}</ListGroup.Item>
                                )
                            })
                        }
                    </ListGroup>
                </aside>
            )
        } else {
            return null;
        }
    }
}

export default connect(null, null)(Aside);
