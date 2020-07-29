import React from 'react';
function ADDitems(props) {
    console.log(props);
    let { elements, handleDelete, handleComplete } = props;
    let itemsHtml = elements.map((item) => {
        return (
            <div key={item.id}>
                <form>
                    <input defaultValue={item.text} id={item.id} readOnly={true} />
                </form>
                <button>Edit</button>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <button onClick={() => { handleComplete(item.id) }}>Mark as Done!</button>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <button onClick={() => { handleDelete(item.id) }}>Delete</button>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
            </div>
        );
    });
    console.log(itemsHtml);
    return (
        <div>
            {itemsHtml}
        </div>
    );
};
export default ADDitems;