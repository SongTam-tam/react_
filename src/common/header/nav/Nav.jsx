import React from 'react';
import { NavStyle } from './style';
import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <NavStyle>
            <ul className="gnb">
                <li>
                    <Link>
                        <img src="./images/hara_strok.png" alt="" />
                    </Link>
                </li>
                <li>
                    <Link>SHOP</Link>
                </li>
                <li>
                    <Link>ABOUT</Link>
                </li>
                <li>
                    <Link>SPA</Link>
                </li>
                <li>
                    <Link>EVENT</Link>
                </li>
                <li>
                    <Link>STORE</Link>
                </li>
                <li>
                    <Link>FAQ</Link>
                </li>
            </ul>
        </NavStyle>
    );
};

export default Nav;
