import styled from "styled-components"
import Input from "@mui/material/Input"

export const Divider = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgb(0, 0, 0);
  background-image: linear-gradient(
      65deg,
      rgb(0, 0, 0) 0%,
      rgb(0, 0, 0) 50%,
      rgb(0, 0, 0, 0) 70%,
      rgba(29, 29, 29, 0) 100%
    ),
    url("https://developerflix.com/wp-content/uploads/2021/12/Capa-Quadrada.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (min-width: 768px) {
    background-size:cover; 
    align-items: flex-start;
  }
`

export const Logo = styled.header`
  font-family: 'Bebas Neue';
  width: 25%;
  height: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: -8rem 0;

  h1{
    font-size: 3rem;
    font-weight: 400;
    color: #fff;
    text-align: center;

    span {
      color: #5c19b5 ;
    }
  }

  img {
    width: 5rem;
  }
  
`

export const Button = styled.button`
  width: 50%;
  border: none;
  border-radius: 0.7rem;
  margin: 1rem 0;
  padding: 1rem 1rem;
  font-size: 1rem;
  background-color: #5c19b5;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:disabled {
    opacity: 0;
    cursor: default;
  }

  &:hover {
    background-color: #7124b4 !important;
    color: #fff;
  }



`

export const ContainerForm = styled.div`
  margin-top: -5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 75vh;

  @media (min-width: 768px) {
    width: 40%;
    height: 100vh;
    margin-left: 2rem;
    margin-top: 0;
  }
`

export const Form = styled.form`
  border-radius: 0.5rem !important;
  display: flex;
  flex-direction: column;
  align-items: center !important;
  height: 40%;

  .form-control{
    height: 25% !important;
    width: 80%;
    padding-bottom: 1.5rem;

    .input-label, svg{
      color: #fff !important;
    }


    .MuiInputBase-root.MuiInput-root{
      &::after{
        border-bottom: 2px solid #5c19b5;
      }

      &:before{
        border-bottom: 2px solid #fff;
      }
  }
  @media (min-width: 768px) and (max-width: 900px) {
    width: 110%;
  }

  @media (min-width: 900px){
    width: 150%;
    padding-bottom: 0.75rem;
  }
}
  
  button:enabled:hover {
    background-color: #5c19b5;
  }
  @media (min-width: 768px) {
    justify-content: center;
  }
`

export const FormInputField = styled(Input)`
    width: 100% !important; 
    height: 2.3em !important;
    border: none !important;
    background-color: rgba(51, 50, 50, 0) !important;
    color: #fff !important;
    font-size: 1.25rem !important;
    
    @media (min-width: 768px) {
      font-size: 1.5rem;
    }

`

export const Link = styled.span`
  width: 90%;
  border: none;
  border-radius: 0.5rem;
  margin-bottom: 1.2rem;
  padding: 0.5rem;
  font-size: 1rem;
  color: #fff;
  text-decoration: underline;
  text-align: center;

  &:hover {
    color: #fff;
    cursor: pointer;
  }
`