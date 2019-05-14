// outsource
import React from 'react';
import {connect} from 'react-redux';

// local dependencies
import Header from '../../../components/header';

class ProfessorLayout extends React.Component {
    render() {
        const {children} = this.props;
        return (
            <section id='pHomePage'>
                <Header/>
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