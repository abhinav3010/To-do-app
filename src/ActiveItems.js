import React from 'react';
function ActiveItems(props) {
    const { activeItems, handleDelete, handleCheckbox, handleEdit, handleItemTextChange } = props;

    if (activeItems.length === 0) { return null; }

    return (
        <div className='collection with-header'>
            <h3 className='center blue-text collection-header'>Active</h3>
            {activeItems.map((item) => {
                return (
                    <div key={item.id} className='collection-item'>
                        <form onSubmit={(e) => { e.preventDefault(); }}>
                            <label>
                                <input
                                    type='checkbox'
                                    value={item.id}
                                    onChange={(e) => { handleCheckbox(e) }}
                                />
                                <span >
                                    <input
                                        style={{ width: 'auto', borderBottom: '0px' }}
                                        defaultValue={item.text}
                                        onChange={(e) => { handleItemTextChange(e, item.id) }}
                                        readOnly={!(item.isEditable)}
                                    />
                                    <button
                                        type='button'
                                        className="waves-effect blue btn-small"
                                        onClick={(e) => { handleEdit(item.id) }}
                                    >
                                        {item.isEditable ? 'Save' : 'Edit'}
                                    </button>
                                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                    <button
                                        type='button'
                                        className="waves-effect blue btn-small"
                                        onClick={() => { handleDelete(item.id) }}
                                    >
                                        Delete
                                    </button>
                                </span>
                            </label>
                        </form>
                        <br />
                        <div>

                            <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
export default ActiveItems;