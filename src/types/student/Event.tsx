import Subject from "./Subject";

export type Event = {
    id: number
    name: string
}

export interface UpcomingEventDTO extends Event{
    type: string
    date: string|object
    maxPoints: number
}

export interface UpcomingEvent extends UpcomingEventDTO {
    subject: Subject
}

export interface MarkEventDTO extends UpcomingEventDTO {
    points: number
    evaluationDate: string|object
}

export interface MarkEvent extends MarkEventDTO, UpcomingEvent {

}

export const EVENT_TYPES = {
    EXAM: 'EXAM',
    MODULE: 'MODULE',
    LABORATORY: 'LABORATORY',
    CREDIT: 'CREDIT'
};

export const isMark = (event: any): event is MarkEvent => {
    return !!(event as MarkEvent).points;
};

export const isMarkDTO = (event: any): event is MarkEventDTO => {
    return !!(event as MarkEvent).points;
};

export default Event;