import React from 'react';

function CompletedItems(props) {
    const { completedItems, handleDelete, handleCheckbox } = props;
    if (completedItems.length === 0) { return null; }
    return (
        <div className='collection with-header'>
            <h3 className='center blue-text collection-header'>Completed</h3>
            {
                completedItems.map((item) => {
                    return (
                        <div className='collection-item' key={item.id}>
                            <form>
                                <label>
                                    <input
                                        type='checkbox'
                                        value={item.id} checked={true}
                                        onChange={(e) => { handleCheckbox(e) }}
                                    />
                                    <span>
                                        <span>{item.text}&nbsp;</span>
                                        <button
                                            className="waves-effect blue btn-small"
                                            type='button'
                                            onClick={() => { handleDelete(item.id) }}
                                        >
                                            Delete
                                    </button>
                                    </span>

                                </label>
                            </form>
                            <br />
                        </div>)
                })
            }
        </div>
    );
}
export default CompletedItems;