import React from 'react';

//each element of the array will be stored in a td cell
const TableRowData = (props) => {
    return (
        <tr>
            {props.rowValues.map(function (element) {
                return <td>{element}</td>
            })}
        </tr>
    );
}

export default TableRowData 
