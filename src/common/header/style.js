import styled from 'styled-components';

export const HeaderStyle = styled.header`
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    .inner {
        height: 206px;
        position: relative;
        &::after {
            background-color: #444;
            content: '';
            width: 100%;
            height: 1px;
            position: absolute;
            left: 0;
            top: 126px;
        }
        .logo {
            position: absolute;
            top: 40px;
            left: 50%;
            transform: translateX(-50%);
        }
    }
`;
