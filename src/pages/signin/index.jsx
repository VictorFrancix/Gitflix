import * as S from "./styled.jsx"
import React from "react";
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import EmailIcon from '@material-ui/icons/Email';

export default function Login() {
  const [values, setValues] = React.useState({
      password: "",
      email: "",
      showPassword: false,
    });
    
  const REGEX_EMAIL = /\S+@\S+\.\S+/;
  
  const minPasswordLength = 6;

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const navigate = useNavigate();
  
      
  return (
    <S.Divider>
      <S.ContainerForm>
        <S.Form>
          <FormControl variant="standard" classes={{root :  "form-control"}}>
            <InputLabel htmlFor="standard-adornment-email" classes={{root : "input-label"}}>Email</InputLabel>
            <S.FormInputField
              id="standard-adornment-email"
              type={'email'}
              required={true}
              value={values.email}
              onChange={handleChange('email')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="email"
                    disabled={true}
                  >
                  <EmailIcon />
                  </IconButton>
                </InputAdornment>
              }
              
            />
          </FormControl>
          <FormControl variant="standard" classes={{root :  "form-control"}}>
            <InputLabel htmlFor="standard-adornment-password" classes={{root : "input-label"}}>Password</InputLabel>
            <S.FormInputField
              id="standard-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              required={true}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              
            />
          </FormControl>
              
          <S.Button type="submit" disabled = {!REGEX_EMAIL.test(values.email) || values.password.length <= minPasswordLength}>Entrar</S.Button>
          <S.Link onClick={() => navigate("/sign-up")}>First time? Create an account!</S.Link>
        </S.Form>
      </S.ContainerForm>
    </S.Divider>
  )
}
