import {SimplifiedSubject} from './subject';

export class SimplifiedProfessor {
    public id: number;
    public firstName: string;
    public lastName: string;
    public patronymic: string;

    constructor({ id, first_name, last_name, patronymic }: any) {
        this.id = id;
        this.firstName = first_name;
        this.lastName = last_name;
        this.patronymic = patronymic;
    }

    public serialize(): object {
        return {
            id: this.id,
            first_name: this.id,
            last_name: this.id,
            patronymic: this.id
        }
    }
}

export default class Professor extends SimplifiedProfessor {
    public subjects: SimplifiedSubject[];

    constructor(data: any) {
        super(data);
        let { subjects } = data;
        this.subjects = [];
        for(let s of subjects) {
            this.subjects.push(new SimplifiedSubject(s))
        }
    }

    public serialize(): object {
        let subjects: [] = [];
        for(let s of this.subjects) {
            s.serialize();
        }
        return {
            ...super.serialize(),
            subjects
        }
    }
}