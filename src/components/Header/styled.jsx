import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 10%;
  display: flex;
  background-color: #000000;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 1px solid #fff;

  a {
    font: 2rem "Bebas Neue";
    color: #fff;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }
`;

export const Logo = styled.div`
  margin-left:-15rem;
  margin-right: -8rem;
  width: 25%;
  height: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font: 3rem "Bebas Neue";
    color: #fff;
    span{
      color: #5c19b5;
    }
  }
  img {
    
    width: 5rem;
    transition: all 1s;
    transform-style: preserve-3d;
    &:hover {
      transform: rotateY(-180deg);
    }
  }

`;
