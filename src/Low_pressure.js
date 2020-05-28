import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './utils/items';

const Low_pressure = ({ _id }) => {

    const [{ isDragging }, drag] = useDrag({
        item: {
            type: ItemTypes.LOW,
            id: _id
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

export default Low_pressure;