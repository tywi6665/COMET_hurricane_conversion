import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../../utils/items';

const Draggable = ({ _id, text, name, src }) => {

    const [{ isDragging }, drag] = useDrag({
        item: {
            type: (name === "high" ? ItemTypes.HIGH : (name === "low" ? ItemTypes.LOW : ItemTypes.HURRICANE)),
            id: _id
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    });

    return (
        <>
            {text ? (
                <span
                    ref={drag}
                    className={_id}
                >{text}</span>
            ) : (
                    <img src={src}
                        ref={drag}
                        className={_id} />
                )}
        </>

    );
}

export default Draggable;