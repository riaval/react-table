import React from 'react';

const TableRowActive = ({ selectedUser, span, onClose }) => {
    const details = (
        <td rowSpan="3" className="details">
            <div>Добавлено: {selectedUser?.details?.added}</div>
            <div>Возраст: {selectedUser?.details?.age}</div>
            <div>Семейное положение: {selectedUser?.details?.marital}</div>
            <div>Работает: {selectedUser?.details?.job}</div>
            <div>Образование: {selectedUser?.details?.education}</div>

            <div className="close" onClick={onClose}>X</div>
        </td>
    );

    return (
        <>
            {span ? details : null}
        </>
    );
};

export default TableRowActive;
