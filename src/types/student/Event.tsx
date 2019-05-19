import Subject from "./Subject";

export type Event = {
    id: number
    name: string
}

export interface ExamEvent extends Event {
    subject: Subject
    type: string
    date: string|object
    maxPoints: number
}

export interface MarkEvent extends ExamEvent {
    points: number
}

export const EVENT_TYPES = {
    EXAM: 'EXAM',
    MODULE: 'MODULE',
    LABORATORY: 'LABORATORY',
    CREDIT: 'CREDIT'
};

export default Event;