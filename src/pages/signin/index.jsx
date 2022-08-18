import React from "react";
import { useNavigate } from "react-router-dom";

import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import EmailIcon from "@material-ui/icons/Email";

import CustomizedSnackbars from "./../../components/Alerts/index.jsx";
import gitflix from "./../../assets/images/gitflix.png";
import api from "../../services/api.jsx";
import * as S from "./styled.jsx";

export default function Login() {
  const [values, setValues] = React.useState({
    password: "",
    email: "",
    showPassword: false,
  });

  const [open, setOpen] = React.useState(false);

  const REGEX_EMAIL = /\S+@\S+\.\S+/;

  async function login(event) {
    event.preventDefault();

    try {
      delete values.showPassword;
      const body = { ...values };
      const response = await api.post("/sign-in", body);
      console.log(response.data);

      navigate("/home");
    } catch (error) {
      console.log(error.message);
      setOpen(true);
    }
  }

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
      <>
        <S.ContainerForm>
          <S.Logo>
            <h1>
              <span>Git</span>flix
            </h1>
            <img src={gitflix} alt="logo" />
          </S.Logo>
          <S.Form onSubmit={login}>
            <FormControl variant="standard" classes={{ root: "form-control" }}>
              <InputLabel
                htmlFor="standard-adornment-email"
                classes={{ root: "input-label" }}
              >
                Email
              </InputLabel>
              <S.FormInputField
                id="standard-adornment-email"
                type={"email"}
                required={true}
                value={values.email}
                onChange={handleChange("email")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label="email" disabled={true}>
                      <EmailIcon />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl variant="standard" classes={{ root: "form-control" }}>
              <InputLabel
                htmlFor="standard-adornment-password"
                classes={{ root: "input-label" }}
              >
                Password
              </InputLabel>
              <S.FormInputField
                id="standard-adornment-password"
                type={values.showPassword ? "text" : "password"}
                required={true}
                value={values.password}
                onChange={handleChange("password")}
                disabled={false}
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

            <S.Button
              type="submit"
              disabled={
                !REGEX_EMAIL.test(values.email) || values.password.length <= 6
              }
            >
              Enter
            </S.Button>

            <S.Link onClick={() => navigate("/sign-up")}>
              First time? Create an account!
            </S.Link>
          </S.Form>
        </S.ContainerForm>

        {open ? (
          <CustomizedSnackbars
            open={open}
            setOpen={setOpen}
            message={"Invalid email or password"}
            severity={"error"}
          />
        ) : null}
      </>
    </S.Divider>
  );
}
