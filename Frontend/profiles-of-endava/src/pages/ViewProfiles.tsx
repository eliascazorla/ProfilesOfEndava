import React, { useState, useEffect } from 'react';
import CardsContainer from '../components/CardsContainerComponent/CardsContainer';
import { Profile } from '../interfaces/Profile';
import ProfileService from '../services/ProfileService';



function ViewProfiles () {

    const [profiles, setProfiles] = useState(new Array());

    useEffect(() => {
        const profileService: ProfileService = new ProfileService();
        profileService.get().then(response => {
            setProfiles(response);
            //usar hook cuando se reinicia la pagina y ahi setearle el estado con los perfiles, madarle ese estado a cardscontainer.
        });
    });
    
    
    return (
        <div>
            <CardsContainer profiles={profiles}/>
        </div>
    );
}

export default ViewProfiles
