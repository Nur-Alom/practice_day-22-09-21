import React, { useEffect, useState } from 'react';
import Calculation from '../calculation/Calculation';

const Data = () => {
    const [pepole, setPepole] = useState([])
    // console.log(pepole)
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setPepole(data))
    }, [])

    return (
        <div>
            <h1>Display Data!!</h1>
            {
                pepole.map(man => <Calculation
                    key={man.index}
                    man={man}
                />)
            }

        </div>
    );
};

export default Data;