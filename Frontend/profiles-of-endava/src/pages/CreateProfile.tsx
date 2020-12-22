import * as React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button} from "@material-ui/core"
import CloseSharpIcon from '@material-ui/icons/CloseSharp';
import { Link } from "react-router-dom"
import { useState } from "react"
import ProfileService from '../services/ProfileService';


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

  return (
    <div>
      <Link to="#" onClick={handleToggle}>Create Profile</Link>

      <Dialog open={open} onClose={handleToggle} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add profile<a href="#" onClick={handleToggle}><CloseSharpIcon/></a></DialogTitle>
        <DialogContent>
          <form>
            <section>
              <label>
                FULL NAME
                <input type="text" 
                       value={profile.fullName} 
                       onChange={(e) => {setProfile({ ...profile, fullName:e.target.value})}}/>
              </label>
              <label>
                BORN DATE
                <input type="text" 
                       value={profile.bornDate} 
                       onChange={(e) => {setProfile({ ...profile, bornDate: e.target.value})}}/>
              </label>
              <label>
                TENURE
                <input type="text" 
                       value={profile.tenure} 
                       onChange={(e) => {setProfile({ ...profile, tenure: Number(e.target.value)})}}/>
              </label>
              <label>
                SENIORITY
                <input type="text" 
                       value={profile.seniority} 
                       onChange={(e) => {setProfile({ ...profile, seniority: e.target.value})}}/>
              </label>
            </section>
            <section>
              <h3>Skills</h3>
              <ul>
                {skills.map((skillAdded:any) => <li>{skillAdded.skill.name}</li>)}
              </ul>
              <input placeholder="ADD SKILL NAME" 
                     type="text" 
                     value={skill.name} 
                     onChange={(e) => {setSkill({ ...skill, name: e.target.value})}}/>
              <input placeholder="ADD SKILL LEVEL" 
                     type="text" 
                     value={skillLevel.level} 
                     onChange={(e) => {setSkillLevel({ ...skillLevel, level: Number(e.target.value)})}}/>
              <Button onClick={addSkill}>
                  ADD
              </Button>
            </section> 
            <section>
              <h3>Projects</h3>
              <input placeholder="ADD PROJECT DESCRIPTION" 
                     type="text" 
                     value={historicalProject.description} 
                     onChange={(e) => {setHistoricalProject({ ...historicalProject, description: e.target.value})}}/>
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
              <Button onClick={addProject}>
                  ADD
              </Button>
            </section>
            <section>
              <h3>User info</h3>
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleToggle}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CreateProfile