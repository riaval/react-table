import React from 'react';

import './App.css';
import Table from './Table';

const users = [
    {
        name: 'Смородина Алена Александровна',
        phone: '0987658923',
        email: 'alenasmorodina@gmail.com',
        skype: 'alenasmorodina',
        comment: 'Встреча завтра на 11:00.',
        details: {
            added: '21.05.2018',
            age: 23,
            marital: 'холост',
            job: 'Фора, кассир',
            education: 'Высшее, НТУУ КПИ, Финансы и кредит',
        },
    },
    {
        name: 'Мироненнко-Коновалов Александр Игнатьевич',
        phone: '0506123123',
        email: 'milanovalex@ua.fm',
        skype: 'Milanovalex',
        comment: 'Созвониться в пятницу 05.07.2019.',
        details: {
            added: '6666666',
            age: 35,
            marital: '77777777',
            job: '8888888888',
            education: '99999999999999',
        },
    },
    {
        name: 'Зайченко Валентина Александровна',
        phone: '0966671290',
        email: 'zay4enkovalya@mail.ru',
        skype: 'zay4enkovalya',
        comment: 'Очень занят в ближайшие 2 недели. 10.05.2019.',
        details: {
            added: '1111111111',
            age: 41,
            marital: '2222222222',
            job: '4444444',
            education: '55555555555',
        },
    },
];

const App = () => {
    return (
        <div className="app">
            <Table users={users} />
        </div>
    );
};

export default App;
