import {SimplifiedProfessor} from "./professor";

export class SimplifiedSubject {
    public id: number;
    public name: string;
    public type: string;

    constructor(data: any) {
        let {id, name, type } = data;

        this.id = id;
        this.name = name;
        this.type = type;
    }

    public serialize() {
        return {
            id: this.id,
            name: this.name,
            type: this.type,
        }
    }
}

export default class Subject extends SimplifiedSubject {
    public professors: SimplifiedProfessor[];

    constructor(data: any) {
        super(data);
        let {professors} = data;
        this.professors = [];
        for(let p of professors) {
            this.professors.push(new SimplifiedProfessor(p))
        }
    }

    public serialize() {
        let professors: [] = [];
        for(let p of this.professors) {
            p.serialize();
        }
        return {
            ...super.serialize(),
            professors
        }
    }
}