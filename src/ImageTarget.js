import React from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './utils/items';

const ImageTarget = ({ children, img_src, _id }) => {

    const [{ isOver }, drop] = useDrop({
        accept: [ItemTypes.LOW, ItemTypes.HIGH],
        drop: (item, monitor) => console.log(item),
        collect: monitor => ({
            isOver: !!monitor.isOver()
        })
    })

    return (
        <div
            ref={drop}>
            <img
                className="interaction_img"
                src="./graphics/sample.jpg"
                title="Aim-a-cane" />
            {children}
        </div>

    );
}

export default ImageTarget;