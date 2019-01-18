import React from 'react';

const ListEntry = (props) => {
    return (
        <div onDoubleClick={() => props.edit(props.i)}>
        {/* <input type='submit' value='delete' onClick={()=>props.delete()}/> */}
            <ul>
                <li>{props.listItem}</li>
            </ul>
        </div>
    )
}



export default ListEntry