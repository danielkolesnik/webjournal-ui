// outsource
import React from 'react';
import {Button, ModalBody, ModalFooter, ModalTitle} from "react-bootstrap";
import Subject from "../../../types/student/Subject";
import {connect} from 'react-redux';

// local dependencies


type Props = {
    subject: Subject
    closeModal: ()=>any
}

class SubjectModal extends React.Component<Props, any> {

    render() {
        const {subject, closeModal} = this.props;
        return [
            <ModalTitle key='title'>
                {subject.name}
            </ModalTitle>,
            <ModalBody key='body'>
                Content will be received from server soon...
            </ModalBody>,
            <ModalFooter key='footer'>
                <Button variant="outline-danger" onClick={closeModal}>Close</Button>
            </ModalFooter>
        ]
    }
}

export default connect(null, null)(SubjectModal);
