import React from "react";
import { useNavigate } from "react-router-dom";

import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import EmailIcon from "@material-ui/icons/Email";
import BadgeIcon from "@mui/icons-material/Badge";

import CustomizedSnackbars from "../../components/Alerts/index.jsx";
import gitflix from "./../../assets/images/gitflix.png";
import api from "../../services/api.jsx";
import DataContext from "./../../providers";
import * as S from "./styled.jsx";
import Loading from "./../../components/Loading";

export default function SignUp() {
  const [values, setValues] = React.useState({
    name: "",
    password: "",
    confirmPassword: "",
    email: "",
  });
  const [show, setShow] = React.useState({
    Password: false,
    PasswordConfirm: false,
  });

  const {
    open,
    setOpen,
    message,
    setMessage,
    severity,
    setSeverity,
    loading,
    setLoading,
  } = React.useContext(DataContext);

  async function register(event) {
    setLoading(true);
    event.preventDefault();

    try {
      
      const body = { ...values };
      await api.post("/sign-up", body);

      setSeverity("success");
      setMessage("Successfully registered");
      navigate("/");

    } catch (error) {

      console.log(error);
      setSeverity("error");
      if (error.response.status === 409)
        setMessage("Email already registered");
      else setMessage("internal error");

    } finally {
      setOpen(true);
      setLoading(false);
    }
  }

  const REGEX_EMAIL = /\S+@\S+\.\S+/;

  const handleClickShowPassword = (prop) => {
    setShow({ ...show, [prop]: !show[prop] });
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
          <S.Form onSubmit={register}>
            <FormControl variant="standard" classes={{ root: "form-control" }}>
              <InputLabel
                htmlFor="standard-adornment-name"
                classes={{ root: "input-label" }}
              >
                Name
              </InputLabel>
              <S.FormInputField
                id="standard-adornment-name"
                type={"text"}
                required={true}
                value={values.name}
                onChange={handleChange("name")}
                disabled={loading}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label="user" disabled={true}>
                      <BadgeIcon />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

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
                disabled={loading}
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
                type={show.Password ? "text" : "password"}
                required={true}
                disabled={loading}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => handleClickShowPassword("Password")}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {show.Password ? <VisibilityOff /> : <Visibility />}
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
                ConfirmPassword
              </InputLabel>

              <S.FormInputField
                id="standard-adornment-password"
                type={show.PasswordConfirm ? "text" : "password"}
                required={true}
                disabled={loading}
                value={values.confirmPassword}
                onChange={handleChange("confirmPassword")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle confirmpassword visibility"
                      onClick={() => handleClickShowPassword("PasswordConfirm")}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {show.PasswordConfirm ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <S.Button
              type="submit"
              disabled={
                !REGEX_EMAIL.test(values.email) ||
                values.password.length <= 6 ||
                values.password !== values.confirmPassword ||
                values.name.length <= 2 ||
                loading
              }
            >
              {loading ? <Loading /> : "Sign Up"}
            </S.Button>

            <S.Link onClick={loading ? null : () => navigate("/")}>
              Already is registered? Sign In!
            </S.Link>
          </S.Form>
        </S.ContainerForm>
        
        {open ? (
          <CustomizedSnackbars
            open={open}
            setOpen={setOpen}
            message={message}
            severity={severity}
          />
        ) : null}

      </>
    </S.Divider>
  );
}
