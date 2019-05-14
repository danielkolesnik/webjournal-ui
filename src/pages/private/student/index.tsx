// outsource
import React from 'react';

// local dependencies
import Header from "../../../components/header";
import StudentAside from "../../../components/aside/StudentAside";

class StudentLayout extends React.Component<any, any> {

    render() {
        const {children, location} = this.props;
        return (
            <section id='student'>
                <Header location={location}/>
                <div className='page-content'>{children}</div>
            </section>
        )
    }
}

export default StudentLayout;
