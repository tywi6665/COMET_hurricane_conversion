import React from 'react';
import ImageWrapper from './ImageWrapper';
import Draggable from './Draggable';
import Button from '../Button'

const Interaction_wrapper = ({ children, img_src }) => {

    const isPlaced = _id => {

    }

    return (
        <>
            <ImageWrapper />
            <div className="draggables_wrapper">
                <Draggable
                    _id="drag_low"
                    name="low"
                    text="L"
                />
                <Draggable
                    _id="drag_high"
                    name="high"
                    text="H"
                />
                <Draggable
                    _id="drag_hurricane"
                    name="hurricane"
                    src="/graphics/hurricane.jpg"
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