export default class Teacher {
    private name: string;
    private ra: number;
    private cpf: number;
    private wage: number;
    private discipline: string;


    constructor(name: string, ra: number, cpf:number, wage: number, discipline: string){
        this.name = name;
        this.ra = ra;
        this.cpf = cpf;
        this.wage = wage;
        this.discipline = discipline;
    }

    public getName(): string{
        return this.name;
    }
    public getRa(): number{
        return this.ra;
    }
    public getCpf(): number{
        return this.cpf;
    }
    public getWage(): number{
        return this.wage;
    }
    public getDiscipline(): string{
        return this.discipline;
    }

    public setName(name: string){
        this.name = name;
    }
    public setRa(ra: number){
        this.ra = ra;
    }
    public setCpf(cpf: number){
        this.cpf = cpf;
    }
    public setWage(wage:number){
        this.wage = wage;
    }
    public setDiscipline(discipline: string){
        this.discipline = discipline;
    }
}