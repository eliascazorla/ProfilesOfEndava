import { Project } from "./Project";
import { SkillLevel } from "./SkillLevel";

export interface Profile{
    id:number,
    fullName:string,
    bornDate:string,
    tenure:number,
    seniority:string,
    skills:SkillLevel[],
    historicalProjects:Project[]
}