import React, { useState, useEffect } from 'react';
import CardsContainer from '../components/CardsContainerComponent/CardsContainer';
import SearchBox from '../components/SearchBoxComponent/SearchBox';
import ProfileService from '../services/ProfileService';



function ViewProfiles () {
    const [profiles, setProfiles] = useState([]);
    const service = new ProfileService();

    useEffect(() => {
        service.get().then(response => {
            setProfiles(response);
        });
    }, []);
    
    const profilesByName = (name:string) => {
        service.getByName(name).then(response => {
            setProfiles(response);
        });
    }

    return (
        <div>
            <SearchBox profilesByName={profilesByName}/>
            <CardsContainer profiles={profiles}/>
        </div>
    );
}

export default ViewProfiles
