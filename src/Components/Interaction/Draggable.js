import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../../utils/items';

const Draggable = ({ _id, index, text, name, src, isDragged }) => {

    const [{ isDragging }, drag] = useDrag({
        item: {
            type: (name === "high" ? ItemTypes.HIGH : (name === "low" ? ItemTypes.LOW : ItemTypes.HURRICANE)),
            id: _id,
            src: src ? src : null,
            text: (name === "high" ? "H" : (name === "low" ? "L" : null)),
            index: index
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
                    index={index}
                    className={_id}
                    style={{ opacity: isDragging ? "0" : "1", visibility: isDragged ? "hidden" : "visible" }}
                >{text}</span>
            ) : (
                    <img src={src}
                        ref={drag}
                        index={index}
                        className={_id}
                        style={{ opacity: isDragging ? "0" : "1" }}
                    />
                )}
        </>

    );
}

export default Draggable;