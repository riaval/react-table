import React, { useState } from 'react';

import TableRow from './TableRow';
import TableRowActive from './TableRowActive';
import TableRowPassive from './TableRowPassive';

const Table = ({ users }) => {
    const [selectedUser, setSelectedUser] = useState(null);

    const onSelectionOpen = (user) => {
        setSelectedUser(user);
    };

    const onSelectionClosed = () => {
        setSelectedUser(null);
    };

    const rows = users.map((user, index) => (
        <TableRow
            user={user}
            selectedUser={selectedUser}
            onOpen={onSelectionOpen.bind(this, user)}
            key={user.email}
        >
            {selectedUser ? (
                <TableRowActive
                    selectedUser={selectedUser}
                    span={index === 0}
                    onClose={onSelectionClosed}
                />
            ) : (
                <TableRowPassive user={user} />
            )}
        </TableRow>
    ));

    return (
        <table className="table">
            <tbody>{rows}</tbody>
        </table>
    );
};

export default Table;
