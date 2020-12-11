import React, { useState, useEffect } from 'react';
import CardsContainer from '../components/CardsContainerComponent/CardsContainer';
import { Profile } from '../interfaces/Profile';
import ProfileService from '../services/ProfileService';



function ViewProfiles () {

    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        const profileService: ProfileService = new ProfileService();
        profileService.get().then(response => {
            setProfiles(response);
        });
    });
    
    
    return (
        <div>
            <CardsContainer profiles={profiles}/>
        </div>
    );
}

export default ViewProfiles
