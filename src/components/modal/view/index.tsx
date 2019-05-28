// local dependencies
import StudentSubjectModal from "./StudentSubjectModal";
import StudentEventModal from "./StudentEventModal";
import ProfessorSubjectModal from "./ProfessorSubjectModal";
import ProfessorEventModal from "./ProfessorEventModal";

let studentPrefix = 'student@';
export const STUDENT_MODAL = {
    SUBJECT: studentPrefix+'SUBJECT',
    EVENT: studentPrefix+'EVENT'
};

let professorPrefix = 'professor@';
export const PROFESSOR_MODAL = {
    SUBJECT: professorPrefix+'SUBJECT',
    EVENT: studentPrefix+'EVENT'
};

const MODAL_TYPES: any = {
    // TODO Create Subject Modal with Groups for Professor
    [PROFESSOR_MODAL.SUBJECT]: ProfessorSubjectModal,
    [STUDENT_MODAL.SUBJECT]: StudentSubjectModal,
    [PROFESSOR_MODAL.EVENT]: ProfessorEventModal,
    [STUDENT_MODAL.EVENT]: StudentEventModal,
};

export default MODAL_TYPES