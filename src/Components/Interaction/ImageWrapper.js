import React from 'react';
// import { useDrop } from 'react-dnd';
// import { ItemTypes } from '../../utils/items';
import Target from "./Target";

const ImageWrapper = ({ dragItems, setDragItems, children, img_src, _id }) => {

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
            {/*<div className="interaction-placeholder">
                DROPPABLES HERE
            </div>*/}
            <img
                className="interaction_img"
                src="./graphics/sample.jpg"
            title="Aim-a-cane" />
            {/* {children} */}
            <Target
                _id="high_1"
                name="high"
                dragItems={dragItems}
                setDragItems={setDragItems}
            />
            <Target
                _id="low_1"
                name="low"
                dragItems={dragItems}
                setDragItems={setDragItems}
            />
            <Target
                _id="hurricane_1"
                name="hurricane"
                dragItems={dragItems}
                setDragItems={setDragItems}
            />
        </div>

    );
}

export default ImageWrapper;