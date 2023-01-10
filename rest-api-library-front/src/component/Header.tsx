import React from 'react'
import { Link } from 'react-router-dom'

import '../css/header.css'
import '../css/cards.css'

export const Header: React.FC = () => {

    return (
        <div className="header-outer">
            <div className="header container">
                <div className="header__title">
                    <span>Библиотека</span>
                </div>
                <div className="header__links">
                    <Link className="header__link" to="/book">Книги</Link>
                    <Link className="header__link" to="/author">Авторы</Link>
                    <Link className="header__link" to="/rubric">Рубрикация</Link>
                    <Link className="header__link" to="/publisher">Издатель</Link>
                    <Link className="header__link" to="/reader">Читатель</Link>
                    <Link className="header__link" to="/stock">Склад</Link>
                </div>
            </div>
        </div>
    )
}