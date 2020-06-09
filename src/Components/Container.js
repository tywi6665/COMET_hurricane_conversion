import React from 'react';
import Tutorial from './Tutorial';

const Container = ({ children }) => {
    return (

        <div className="wrapper">
            <h1 className="title heading">AIM A HURRICANE</h1>
            <Tutorial />
            {children}
        </div>

    );
}

export default Container;