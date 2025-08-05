import React from 'react';
import { HeaderStyle } from './style';
import Nav from './nav/Nav';
import HeaderForm from './form/HeaderForm';

const Header = () => {
    return (
        <HeaderStyle>
            <div className="inner">
                <HeaderForm />
                <h1 className="logo">
                    <a href="#">
                        <img src="./images/LOGO.png" alt="" />
                    </a>
                </h1>
                <Nav />
            </div>
        </HeaderStyle>
    );
};

export default Header;
