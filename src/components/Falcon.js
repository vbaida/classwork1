import React from 'react';

const Falcon = (props) => {
    const { mission_name, launch_year, mission_patch_small}=props;

    return (
        <div className="falcon">
            <div>
            <div>{mission_name}</div>
            <div>{launch_year}</div>
            </div>
            <div>
            <div>{mission_patch_small}</div>
            </div>
        </div>
    );
};

export default Falcon;