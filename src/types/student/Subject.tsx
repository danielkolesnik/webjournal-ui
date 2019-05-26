import {MarkEventDTO, UpcomingEventDTO} from "./Event";

export type Subject = {
    id: number
    name: string
    type: string
    professors: {id: number, first_name: string, last_name: string}[]
};

export interface SubjectDTO extends Subject {
    upcomingEvents: UpcomingEventDTO[]
    lastEvents: MarkEventDTO[]
}

export const SUBJECT_TYPES = {
    EXAM: 'EXAM',
    CREDIT: 'CREDIT'
};

export const deserialize = ({id, name, type, professors}: any) => {

};


