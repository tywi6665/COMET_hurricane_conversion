import React from 'react';
import Low_pressure from './Low_pressure';
import High_pressure from './High_pressure';
import Button from './Button'

const Interaction_wrapper = ({ children, img_src }) => {
    return (
        <>
            <img className="interaction_img" src="./graphics/sample.jpg" title="Aim-a-cane" />
            <div className="draggables_wrapper">
                <Low_pressure />
                <High_pressure />
                <Button
                    text='Start'
                    button_class=""
                />
                <Button
                    text='Reset'
                    button_class=""
                />
            </div>
        </>
    );
}

export default Interaction_wrapper;