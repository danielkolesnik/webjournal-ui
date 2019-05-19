// outsource
import React from 'react';
import {connect} from 'react-redux';

// local dependencies
import Header from '../../../components/header';

class ProfessorLayout extends React.Component<any, any> {
    render() {
        const {children, location} = this.props;
        return (
            <section id='professor'>
                <Header location={location}/>
                <div className='content'>
                    {children}
                </div>
            </section>
        )
    }
}

export default connect(
    null,
    null
)(ProfessorLayout);
