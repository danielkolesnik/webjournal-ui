// local dependencies
import SubjectModal from "./SubjectModal";
import EventModal from "./EventModal";


export const STUDENT_MODAL = {
    SUBJECT: 'SUBJECT',
    EVENT: 'EVENT'
};

const MODAL_TYPES: any = {
    [STUDENT_MODAL.SUBJECT]: SubjectModal,
    [STUDENT_MODAL.EVENT]: EventModal

};

export default MODAL_TYPES