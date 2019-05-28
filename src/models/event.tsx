

export class SimplifiedEvent {
    public id: number;
    public name: string;
    public type: string;
    public date: string;
    public evaluationDate: string;
    public maxPoints: number;
    public points: number;

    constructor(data: any) {
        let {id, name, type, date, evaluation_date, points, max_points} = data;

        this.id = id;
        this.name = name;
        this.type = type;
        this.date = date;
        this.evaluationDate = evaluation_date;
        this.maxPoints = max_points;
        this.points = points;
    }

    public serialize() {
        return {
            id: this.id,
            name: this.name,
            type: this.type,
            date: this.date,
            evaluation_date: this.evaluationDate,
            points: this.points,
            max_points: this.maxPoints
        }
    }
}

export default class Event extends SimplifiedEvent {
    public groupSubjectProfessor: any;
    public student: any;

    constructor(data: any) {
        super(data);
        this.groupSubjectProfessor = data.group_subject_professor;
        this.student = data.student;
    }

    public serialize() {
        // student.serialize();
        return {
            ...super.serialize(),
            student: this.student,
            group_subject_professor: this.groupSubjectProfessor
        }
    }
}