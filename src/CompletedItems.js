import React from 'react';

function CompletedItems(props) {
    let { completedItemsList, handleDelete } = props;
    completedItemsList = completedItemsList.map((item) => {
        return (<div key={item.id}>
            <span>{item.text}&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <button onClick={() => { handleDelete(item.id) }}>Delete</button>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </div>)
    });
    return (
        <div>
            {completedItemsList}
        </div>
    );
}
export default CompletedItems;