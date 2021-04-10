import React from 'react';

const TableItem = ({ user, selectedUser, onOpen, children }) => {
    const active = user === selectedUser
    const details = (
        <div className="main-details">
            <span>{user.phone}</span>
            <span>{user.email}</span>
        </div>
    );

    return (
        <tr className="table-row">
            <td className={`main-cell ${active && 'active'}`} onClick={onOpen}>
                <span>{user.name}</span>
                {selectedUser ? details : null}
            </td>
            {children}
        </tr>
    );
};

export default TableItem;
