import React from 'react';
import { Link } from 'react-router-dom';

export const MainMenu = () =>(
    <ul className="main-menu nav-tabs">
        <li>Выбор каталога | </li>
        <li>Еще какая-нибудь кнопка </li>
        <Link to="/cart"> Корзина </Link>
    </ul>
);