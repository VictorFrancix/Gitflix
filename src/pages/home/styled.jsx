import styled from "styled-components";

export const main = styled.main`
  margin-top: 10rem;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  overflow-x: hidden;
  h1{
    font-family: "Bebas Neue";
    font-size: 2rem;
    color: #fff;
    align-self: flex-start
  }
`;

export const roads = styled.div`
  width: 100vw;
  height: 80%;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  transition: all 0.5s ease-in-out;
  overflow-x: hidden;
`;
export const road = styled.div`
  width: 16vw;
  height: 100vh;
  font-size: 200px;
`;
export const especial = styled.div`
  width: 100vw;
  height: 100%;
  margin-bottom: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

    background-image: linear-gradient(
      65deg,
      rgb(0, 0, 0) 0%,
      rgb(0, 0, 0, 0) 70%,
      rgba(29, 29, 29, 0) 100%
    ),
    url(https://images.gupy.io/unsafe/500x152/https://s3.amazonaws.com/gupy5/production/companies/2355/career/19612/images/2021-09-23_18-01_mainImage.png) ;
  
    background-size: cover !important;

  p {
    margin-top: 1rem;
    color: #fff !important;
    word-wrap: break-word;
    font-size: 0.9rem !important;
    width: 20%;
  }
`;
