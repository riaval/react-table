import React from 'react';

const TableRowPassive = ({ user }) => {
    return (
        <>
            <td>{user.phone}</td>
            <td>{user.email}</td>
            <td>{user.skype}</td>
            <td>{user.comment}</td>
        </>
    );
};

export default TableRowPassive;
