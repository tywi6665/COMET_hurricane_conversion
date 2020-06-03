import React from 'react';
// import { useDrop } from 'react-dnd';
// import { ItemTypes } from '../../utils/items';
import Target from "./Target";

const ImageWrapper = ({ children, img_src, _id }) => {

    // const [{ isOver }, drop] = useDrop({
    //     accept: [ItemTypes.LOW, ItemTypes.HIGH],
    //     drop: (item, monitor) => console.log(item),
    //     collect: monitor => ({
    //         isOver: !!monitor.isOver()
    //     })
    // })

    return (
        <div
            className="image_wrapper"
        // ref={drop}
        >
            <img
                className="interaction_img"
                src="./graphics/sample.jpg"
                title="Aim-a-cane" />
            {/* {children} */}
            <Target
                _id="high_1"
                name="high"
            />
            <Target
                _id="low_1"
                name="low"
            />
            <Target
                _id="hurricane_1"
                name="hurricane"
            />
        </div>

    );
}

export default ImageWrapper;