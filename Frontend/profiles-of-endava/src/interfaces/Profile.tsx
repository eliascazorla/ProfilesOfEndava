import { Project } from "./Project";

export interface Profile{
    id:number,
    fullName:string,
    bornDate:string,
    tenure:number,
    seniority:string,
    skills:string[],
    projects:Project[]
}