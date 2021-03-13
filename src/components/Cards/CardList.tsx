import React from 'react';
import Card from './Card';
import {IRobot} from '../MainPage/MainPage'

const Cardlist = ({robots}: {robots: IRobot[]}) => {
    return (
        <div>
            {
                robots.map((user, i) => {
                    return (
                        <Card
                            key={robots[i].id}
                            id={robots[i].id}
                            name={robots[i].name}
                            email={robots[i].email}
                        />
                    );
                })
            }
        </div>
    );
}

export default Cardlist;