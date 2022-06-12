import Styled from 'styled-components';

//Styles of ImageGallery
export const Flex = Styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: flex-start;
    padding: 8px;
`


export const BoxImg = Styled.div`
    overflow: hidden;
    position: relative;
    height: 100%;
    ::after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #000;
        opacity: 0.6;
        transition: 0.7s;
    }
    :hover {
        ::after{
            opacity: 0;
        }
        img {
            transform: scale(1.2);
        }
    }
`

export const Box = Styled.div`
    flex: 1 1 20%;
    height: 20rem;
    padding: 8px;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    @media only screen and (max-width: 1024px) {
        flex-basis: 25%;
    }
    @media only screen and (max-width: 809px) {
        flex-basis: calc(100% / 3);
    }

    @media only screen and (max-width: 700px) {
        flex-basis: 50%;
    }
    
    img {
        transition: 0.7s;
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`


//Styles of ImageView

export const Wrapper = Styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    position: relative;
`

export const ImageBox = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    button:nth-of-type(1) {
            position: absolute;
            left: 3rem;
    }
    button:nth-of-type(2) {
            position: absolute;
            right: 3rem;
    }
    img {
        max-width: 100vw;
        max-height: 100vh;
        display: block;
    }
`

export const Btn = Styled.button`
    background: #fff;
    cursor: pointer;
    font-size: 2rem;
    height: 3.2rem;
    width: 3.2rem;
    border: 3px solid black;
    border-radius: 50%;
    ${({invisible}) => invisible && `visibility: hidden; opacity: 0`}
`

export const BtnBack = Styled.button`
    background: #fff;
    cursor: pointer;
    font-size: 2rem;
    height: 3.2rem;
    width: 3.2rem;
    border: 3px solid black;
    border-radius: 50%;
    position: absolute;
    top: 3rem;
    right: 3rem;
    z-index: 2;
`

export const Order = Styled.div`
    position: absolute;
    bottom: 1.2rem;
    text-align: center;
    font-size: 3rem;
`
