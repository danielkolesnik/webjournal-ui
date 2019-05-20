// outsource
import React from 'react';
import { connect } from 'react-redux';
import { Modal } from "react-bootstrap";

// local dependencies
import MODAL_TYPES from './view';


type Props = {
    modalType: string
    modalProps: any
}

class ModalContainer extends React.Component<Props, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            modalIsOpen: false
        };
        this.closeModal = this.closeModal.bind(this)
    }

    componentWillReceiveProps(nextProps: any) {
        if (nextProps !== this.props) {
            this.setState({
                modalIsOpen: nextProps.modalProps.open
            })
        }
    }

    closeModal() {
        this.setState({ modalIsOpen: false })
    }

    render() {
        const {modalType, modalProps} = this.props;
        const {modalIsOpen} = this.state;

        if (!modalType) {
            return null
        }

        // @ts-ignore
        const SpecifiedModal = MODAL_TYPES[modalType];

        return (
            <div className='modal-root'>
                <Modal
                    show={modalIsOpen}
                    onHide={this.closeModal}
                    size={modalProps.size||''}
                    centered
                    dialogClassName={modalType.toLowerCase()+'-modal'}
                >
                    <SpecifiedModal
                        closeModal={this.closeModal}
                        {...modalProps}
                    />
                </Modal>
            </div>
        )
    }
}

export default connect(
    (state: any) => ({
        modalType: state.modal.modalType,
        modalProps: state.modal.modalProps
    }),
    null
)(ModalContainer)
