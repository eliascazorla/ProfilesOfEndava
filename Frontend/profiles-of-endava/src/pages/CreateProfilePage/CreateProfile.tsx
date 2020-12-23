import * as React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button} from "@material-ui/core"
import CloseSharpIcon from '@material-ui/icons/CloseSharp';
import ArrowDropDown from "@material-ui/icons/ArrowDropDown"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import ProfileService from '../../services/ProfileService';
import  "../CreateProfilePage/CreateProfile.scss"
import SkillService from '../../services/SkillService';

function CreateProfile () {
  const profileService = new ProfileService();
  const skillService = new SkillService();

  const [availableSkills, setAvailableSkills] = useState<any[]>([]);

  const [profile, setProfile] = useState({
                                          fullName:"",
                                          bornDate:"",
                                          tenure:0,
                                          seniority:"",
                                          skills:[] as any,
                                          historicalProjects:[] as any,
                                          dev:{mail:"", password:""}
                                        });
  const [skills, setSkills] = useState([] as any);
  const [skillLevel, setSkillLevel] = useState({level:0, skill: {name:""}});
  const [skill, setSkill] = useState({name:""});
  const [historicalProjects, setHistoricalProjects] = useState([] as any);
  const [historicalProject, setHistoricalProject] = useState({startDate:"", endDate: "", company: "", description: ""});
  const [dev, setDev] = useState({mail:"", password:""});

  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  }


  const [skillError, setSkillError] = useState("");
  const addSkill = () => {
    if(skill.name !== ""){
        if(skillLevel.level >=1 && skillLevel.level <=5){
          setSkillError("");
          const skillToAdd = {level: skillLevel.level, skill:{name:skill.name}};
          let i: number = 0;
          let found: boolean = false;
          while(i<skills.length && !found){
            if(skills[i].skill.name === skillToAdd.skill.name){
              found = true;
            }
            i++
          }
          if(found){
            setSkillError("You have already entered the skill!");
          }else{
            setSkillError("");
            setSkills([...skills, skillToAdd]);
            setSkill({name:""});
            setSkillLevel({level:0, skill: {name:""}});
          }
        }else{
          setSkillError("Please enter a level between 1 and 5.")
        }
    }else{
      setSkillError("Please enter a valid skill.");
    }
  }

  const [historicalProjectAdded, setHistoricalProjectAdded] = useState("");
  const [projectError, setProjectError] = useState("");
  const addProject = () => {
    if(historicalProject.company !== ""){
      if(historicalProject.startDate !== "" && historicalProject.endDate !== ""){
        if(historicalProject.description !== ""){
          setProjectError("");
          setHistoricalProjects([...historicalProjects, historicalProject]);
          setHistoricalProjectAdded(historicalProject.description);
          setHistoricalProject({startDate:"", endDate: "", company: "", description: ""});
        }else{
          setProjectError("Enter a project description!");
        }
      }else{
        setProjectError("You have to enter a start Date and an end Date!");
      }
    }else{
      setProjectError("Enter a company for the project!");
    }
  }

  const handleSubmit = (e:any) =>{
    if(profile.fullName.length >0  && profile.bornDate.length >0 && profile.tenure >0  && profile.seniority.length >0 
      && skills.length >0 && historicalProjects.length >0 && dev.mail.length >0 && dev.password.length >0){
        const profileToAdd = {fullName: profile.fullName, 
          bornDate: profile.bornDate, 
          tenure: profile.tenure, 
          seniority: profile.seniority, 
          skills: skills, 
          historicalProjects: historicalProjects, 
          dev: dev};
          profileService.createProfile(profileToAdd).then(response => {
          setProfile(response);
          });
          window.location.href = "/profiles";
          setOpen(false);
      }
  }

  const seniorities: string[] = ["SR. CONSULTANT", "CONSULTANT", "SR. ENGINEER", "ENGINEER", "SR. TECHNICIAN", "TECHNICIAN",
                                 "JR. TECHNICIAN", "INTERN"];

  const openAndInjectSkills = () => {
    setOpen(true);
    skillService.get().then(response =>{
      setAvailableSkills(response);
    })
  }


  return (
    <div>
      <Link to="#" onClick={openAndInjectSkills}>Create Profile</Link>

      <Dialog open={open} onClose={handleToggle} aria-labelledby="form-dialog-title" id="dialog">
        <section id="title_Container">
          <h4>Add profile</h4>
          <a href="#" onClick={handleToggle}><CloseSharpIcon id="cross_Icon"/></a>
        </section>
        <form>
          <section>
            <label>
              FULL NAME
            </label>
            <input type="text" 
                    value={profile.fullName} 
                    onChange={(e) => {setProfile({ ...profile, fullName:e.target.value})}}/>
            <label>
              BORN DATE
            </label>
            <input  id="input_Date"
                    type="date" 
                    value={profile.bornDate} 
                    onChange={(e) => {setProfile({ ...profile, bornDate: e.target.value})}}/>
            <label>
              TENURE
            </label>
            <input type="text" 
                    value={profile.tenure} 
                    onChange={(e) => {setProfile({ ...profile, tenure: Number(e.target.value)})}}/>
            <label>
              SENIORITY
            </label>
            <select value={profile.seniority} onChange={(e) => {setProfile({ ...profile, seniority: e.target.value})}}>
              <option value="">SELECT SENIORITY</option>
              {seniorities.map(seniority => <option value={seniority}>{seniority}</option>)}
            </select>
          </section>
          <section>
            <h3>SKILLS</h3>
            <ul>
              {skills.map((skillAdded:any) => <li>{skillAdded.skill.name}</li>)}
            </ul>
            <select value={skill.name} onChange={(e) => {setSkill({ ...skill, name: e.target.value})}}>
              <option value="">SELECT SKILL</option>
              {availableSkills.map(skill => <option value={skill.name}>{skill.name}</option>)}
            </select>
            <input  id="level_Input"
                    placeholder="ADD SKILL LEVEL" 
                    type="text" 
                    value={skillLevel.level} 
                    onChange={(e) => {setSkillLevel({ ...skillLevel, level: Number(e.target.value)})}}/>
            <Button id="style1_button1" onClick={addSkill}>
                ADD
            </Button>
            {skillError!==""?<div className="error">{skillError}</div>:false}
          </section> 
          <section>
            <h3>PROJECTS</h3>
            {historicalProjectAdded !== ""? <p id="projectAdded">{historicalProjectAdded} added</p>:false}
            <input placeholder="ADD COMPANY" type="text" 
                    value={historicalProject.company} 
                    onChange={(e) => {setHistoricalProject({ ...historicalProject, company: e.target.value})}}/>
            <input placeholder="START DATE" 
                    type="text" 
                    onFocus={(e) => {e.target.type='date'}}
                    value={historicalProject.startDate} 
                    onChange={(e) => {setHistoricalProject({ ...historicalProject, startDate: e.target.value})}}/>
            <input placeholder="END DATE" 
                    type="text" 
                    onFocus={(e) => {e.target.type='date'}}
                    value={historicalProject.endDate} 
                    onChange={(e) => {setHistoricalProject({ ...historicalProject, endDate: e.target.value})}}/>
            <textarea placeholder="ADD PROJECT DESCRIPTION" 
                    value={historicalProject.description} 
                    onChange={(e) => {setHistoricalProject({ ...historicalProject, description: e.target.value})}}/>
            <Button id="style1_button2" onClick={addProject}>
                ADD
            </Button>
            {projectError !== ""?<div className="error">{projectError}</div>:false}
          </section>
          <section>
            <h3>USER INFO</h3>
            <input type="text" 
                    placeholder="MAIL" 
                    value={dev.mail} 
                    onChange={(e) => {setDev({ ...dev, mail: e.target.value})}}/>
            <input type="password" 
                    placeholder="PASSWORD" 
                    value={dev.password} 
                    onChange={(e) => {setDev({ ...dev, password: e.target.value})}}/>
          </section>
        </form>
        <DialogActions>
          <Button id="style2_button1" onClick={handleToggle}>
            Cancel
          </Button>
          <Button id="style1_button3" onClick={handleSubmit}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CreateProfile