import Styled from 'styled-components';

export const Fixed = Styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    height: 100vh;
    width: 100vw;
    background-color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
`

export const Text = Styled.div`
    display: inline-block;
    font-size: 3rem;
`