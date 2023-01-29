import styled from "styled-components";

const GeralStyle = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #F2F2F2;
    font-family: 'Inter';
`;
const SideMenuStyle = styled.div`
    width: 200px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #9262FF;
    font-family: 'Inter';
    color: #BFFF6B;
`;
const TopMenuStyle = styled.div`
    width: 100vw;
    justify-content: center;
    background-color: #F2F2F2;
    font-family: 'Inter';
    color: #000;
`;




export {
    GeralStyle,
    SideMenuStyle,
    TopMenuStyle
};