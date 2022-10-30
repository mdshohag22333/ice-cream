import React from 'react';
import IceCreamBuilder from '../../containers/IceCreamBuilder/IceCreamBuilder';
import classes from './Body.module.css';

const Body = () => {
    return (
        <div className={classes.mainbody}>
            <IceCreamBuilder />
        </div>
    );
};

export default Body;
