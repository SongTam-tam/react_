import styled from 'styled-components';

export const NavStyle = styled.nav`
    width: 100%;
    position: absolute;
    top: 146px;
    left: 0;
    .gnb {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 60px;
        li {
            width: 80px;
            height: 40px;
            a {
                color: #fff;
                display: block;
                font-size: 20px;
                font-weight: 500;
                position: relative;
                img {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
            }
        }
    }
`;
