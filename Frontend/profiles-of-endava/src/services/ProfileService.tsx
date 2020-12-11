import * as React from 'react';
import Axios from "axios";

export default class ProfileService{
    constructor(){
    }

    get = () => {
        return  Axios.get("http://localhost:8080/profiles")
                    .then((response) => response.data)
                    .catch((error) => {
                        throw error;
                    });
    };
}

