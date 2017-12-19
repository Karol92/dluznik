import React from 'react';
import TableRow from "material-ui/es/Table/TableRow";
import TableCell from "material-ui/es/Table/TableCell";


const List = props => (
    <TableRow>
        {
            props.items.map((item, index) =>
                <TableCell key={index}>{item}</TableCell>
            )
        }
    </TableRow>
);

export default List;