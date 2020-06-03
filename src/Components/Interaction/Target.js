import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../../utils/items';

const Target = ({ dragItems, setDragItems, children, _id, name }) => {

    const [droppedItem, setDroppedItem] = useState(null)

    const [{ isOver }, drop] = useDrop({
        accept: (name === "high" ? ItemTypes.HIGH : (name === "low" ? ItemTypes.LOW : ItemTypes.HURRICANE)),
        drop(item, monitor) {
            setDroppedItem(item);
            console.log(item)
            setDragItems({
                ...dragItems,
                [item.index]: { ...dragItems[item.index], isDragged: true }
            })
        },
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        })
    })

    return (
        <div className={`target target-${_id}`} ref={drop}>
            {droppedItem ? (
                (droppedItem.text ? (
                    <span
                        className={droppedItem.id}
                    // style={{ opacity: isOver ? "1" : "0" }}
                    >{droppedItem.text}</span>
                ) : (
                        <img src={droppedItem.src}
                            className={droppedItem.id}
                        // style={{ opacity: isOver ? "1" : "0" }}
                        />
                    ))
            ) : (
                    <>
                    </>
                )}
        </div>
    );
}

export default Target;