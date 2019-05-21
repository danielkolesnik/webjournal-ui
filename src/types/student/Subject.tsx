import {MarkEventDTO, UpcomingEventDTO} from "./Event";

type Subject = {
    id: number
    name: string
    type: string
    teachers: string[]
};

export interface SubjectDTO extends Subject {
    upcomingEvents: UpcomingEventDTO[]
    lastEvents: MarkEventDTO[]
}

export default Subject;