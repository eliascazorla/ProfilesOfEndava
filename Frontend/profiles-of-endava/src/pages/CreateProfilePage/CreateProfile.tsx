import * as React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button} from "@material-ui/core"
import CloseSharpIcon from '@material-ui/icons/CloseSharp';
import ArrowDropDown from "@material-ui/icons/ArrowDropDown"
import { Link } from "react-router-dom"
import { useState } from "react"
import ProfileService from '../../services/ProfileService';
import  "../CreateProfilePage/CreateProfile.scss"

function CreateProfile () {
  const profileService = new ProfileService();

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

  const addSkill = () => {
    const skillToAdd = {level: skillLevel.level, skill:{name:skill.name}};
    setSkills([...skills, skillToAdd]);
    setSkill({name:""});
    setSkillLevel({level:0, skill: {name:""}});
  }

  const addProject = () => {
    setHistoricalProjects([...historicalProjects, historicalProject]);
    setHistoricalProject({startDate:"", endDate: "", company: "", description: ""});
  }

  const handleSubmit = (e:any) =>{
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
  }

  const seniorities: string[] = ["SR. CONSULTANT", "CONSULTANT", "SR. ENGINEER", "ENGINEER", "SR. TECHNICIAN", "TECHNICIAN",
                                 "JR. TECHNICIAN", "INTERN"];

  return (
    <div>
      <Link to="#" onClick={handleToggle}>Create Profile</Link>

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
            <input type="text" 
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
              {seniorities.map(seniority => <option value={seniority}>{seniority}</option>)}
            </select>
          </section>
          <section>
            <h3>SKILLS</h3>
            <ul>
              {skills.map((skillAdded:any) => <li>{skillAdded.skill.name}</li>)}
            </ul>
            <input placeholder="ADD SKILL NAME" 
                    type="text" 
                    value={skill.name} 
                    onChange={(e) => {setSkill({ ...skill, name: e.target.value})}}/>
            <input  id="level_Input"
                    placeholder="ADD SKILL LEVEL" 
                    type="text" 
                    value={skillLevel.level} 
                    onChange={(e) => {setSkillLevel({ ...skillLevel, level: Number(e.target.value)})}}/>
            <Button id="style1_button1" onClick={addSkill}>
                ADD
            </Button>
          </section> 
          <section>
            <h3>PROJECTS</h3>
            <input placeholder="ADD COMPANY" type="text" 
                    value={historicalProject.company} 
                    onChange={(e) => {setHistoricalProject({ ...historicalProject, company: e.target.value})}}/>
            <input placeholder="START DATE" 
                    type="text" 
                    value={historicalProject.startDate} 
                    onChange={(e) => {setHistoricalProject({ ...historicalProject, startDate: e.target.value})}}/>
            <input placeholder="END DATE" 
                    type="text" 
                    value={historicalProject.endDate} 
                    onChange={(e) => {setHistoricalProject({ ...historicalProject, endDate: e.target.value})}}/>
            <textarea placeholder="ADD PROJECT DESCRIPTION" 
                    value={historicalProject.description} 
                    onChange={(e) => {setHistoricalProject({ ...historicalProject, description: e.target.value})}}/>
            <Button id="style1_button2" onClick={addProject}>
                ADD
            </Button>
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