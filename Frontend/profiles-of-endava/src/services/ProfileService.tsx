import Axios from "axios";

export default class ProfileService{
    constructor(){
    }

    get = (filter?:string) => {
        if(filter!==null){
            return Axios.get("http://localhost:8080/profiles", {
                            params:{
                                filter: filter
                            }
                        }).then((response) => response.data)
                        .catch((error) => {
                                throw error;
                        })
        }else{
            return  Axios.get("http://localhost:8080/profiles")
                    .then((response) => response.data)
                    .catch((error) => {
                        throw error;
                    });
        }
    };

    createProfile = (data:any) => {
        const config = {headers: {'Content-Type': 'application/json'}}
        return Axios.post("http://localhost:8080/profiles", data, config)
                        .then((response) => response.data)
                        .catch((error) => {
                            throw error;
                        }) 
    }
}

