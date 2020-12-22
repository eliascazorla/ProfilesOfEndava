import Axios from "axios";

export default class SkillService{
    constructor(){
    }

    get = () => {
        return  Axios.get("http://localhost:8080/skills")
                    .then((response) => response.data)
                    .catch((error) => {
                        throw error;
                    });
    };
}