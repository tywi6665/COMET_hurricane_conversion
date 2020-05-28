import React from 'react';
import ImageTarget from './ImageTarget';
import Draggable from './Draggable';
import Button from './Button'

const Interaction_wrapper = ({ children, img_src }) => {

    const isPlaced = _id => {

    }

    return (
        <>
            <ImageTarget />
            <div className="draggables_wrapper">
                <Draggable
                    _id="low"
                    text="L"
                />
                <Draggable
                    _id="high"
                    text="H"
                />
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