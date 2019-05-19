
// local dependencies
import { MODAL } from '../../constants/actions';
import Action from "../../types/Action";

const initialState = {
    modalType: null,
    modalProps: {}
};

export default (state = initialState, action: Action) => {
    const {type, payload} = action;
    switch (type) {
        case MODAL.SHOW:
            state = {
                modalProps: payload.modalProps,
                modalType: payload.modalType
            };
            break;
        case MODAL.HIDE:
            state = initialState;
            break;
        default:
    }

    return state;
}