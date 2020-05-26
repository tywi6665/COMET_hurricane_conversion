import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './utils/items';

const low_pressure = (props) => {

    const [{ isDragging }, drag] = useDrag({
        item: {
            type: ItemTypes.LOW,
            id: props._id
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    });

    return (
        <span
            ref={drag}
            className="low"
        >L</span>
    );
}

export default low_pressure;