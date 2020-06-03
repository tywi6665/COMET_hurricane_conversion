import React from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../../utils/items';

const Target = ({ children, _id, name }) => {

    const [{ isOver }, drop] = useDrop({
        accept: (name === "high" ? ItemTypes.HIGH : (name === "low" ? ItemTypes.LOW : ItemTypes.HURRICANE)),
        drop: (item, monitor) => console.log(item),
        collect: monitor => ({
            isOver: !!monitor.isOver()
        })
    })

    return (
        <div className={`target target-${_id}`} ref={drop}>
            {children}
        </div>
    );
}

export default Target;