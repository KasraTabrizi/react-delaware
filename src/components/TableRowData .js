import React from 'react';

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
