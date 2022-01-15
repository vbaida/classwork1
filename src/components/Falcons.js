import React, {useEffect, useState} from 'react';
import Falcon from "./Falcon";

const Falcons = () => {
    const [falcons, setFalcons] = useState([]);
    useEffect( () => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(falcone => {
                let filter = falcone.filter (falcon => falcone.launch_year !== '2020');
                setFalcons(filter)})

    }, [])

    return (
        <div className="falconhead">
            {falcons.map(value => <Falcon key={value.mission_name} mission_name={value.mission_name} launch_year={value.launch_year}
                                          mission_patch_small={<img src={value.links.mission_patch_small} alt="mission_patch_small"/> } /> )}
        </div>
    );
};

export default Falcons;