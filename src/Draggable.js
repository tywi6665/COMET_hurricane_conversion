import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './utils/items';

const Draggable = ({ _id, text }) => {

    const [{ isDragging }, drag] = useDrag({
        item: {
            type: (_id === "low") ? ItemTypes.LOW : ItemTypes.HIGH,
            id: _id
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    });

    return (
        <span
            ref={drag}
            className={_id}
        >{text}</span>
    );
}

export default Draggable;