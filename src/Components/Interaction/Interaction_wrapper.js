import React, { useState } from 'react';
import ImageWrapper from './ImageWrapper';
import Draggable from './Draggable';
import Button from '../Button'

const Interaction_wrapper = ({ children, img_src }) => {

    const [dragItems, setDragItems] = useState([
        {
            _id: "drag_low",
            name: "low",
            text: "L",
            src: null,
            isDragged: false
        },
        {
            _id: "drag_high",
            name: "high",
            text: "H",
            src: null,
            isDragged: false
        },
        {
            _id: "drag_hurricane",
            name: "hurricane",
            text: null,
            src: "/graphics/hurricane.jpg",
            isDragged: false
        }
    ]);

    return (
        <>
            <ImageWrapper
                dragItems={dragItems}
                setDragItems={setDragItems}
            />
            <div className="draggables_wrapper">
                {dragItems.map((dragItem, i) => {
                    return (
                        <Draggable
                            key={i}
                            index={i}
                            _id={dragItem._id}
                            name={dragItem.name}
                            text={dragItem.text}
                            src={dragItem.src}
                            isDragged={dragItem.isDragged}
                        />
                    )
                })}
                <Button
                    text='Start'
                    button_class=""
                />
                <Button
                    text='Reset'
                    button_class="reset"
                />
            </div>
        </>
    );
}

export default Interaction_wrapper;