import * as S from "./styled.jsx"
import React from "react"
import { useNavigate } from "react-router-dom"
import IconButton from "@mui/material/IconButton"
import InputLabel from "@mui/material/InputLabel"
import InputAdornment from "@mui/material/InputAdornment"
import FormControl from "@mui/material/FormControl"
import Visibility from "@material-ui/icons/Visibility"
import VisibilityOff from "@material-ui/icons/VisibilityOff"
import EmailIcon from "@material-ui/icons/Email"
import BadgeIcon from "@mui/icons-material/Badge"
import gitflix from "./../../assets/images/gitflix.png"

export default function SignUp() {
  const [values, setValues] = React.useState({
    name: "",
    password: "",
    confirmPassword: "",
    email: "",
    showPassword: false,
    showPasswordConfirm: false,
  })

  const REGEX_EMAIL = /\S+@\S+\.\S+/


  const handleClickShowPassword = (prop) => {
    setValues({ ...values, [prop]: !values[prop] })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const navigate = useNavigate()

  return (
    <S.Divider>
      <S.ContainerForm>
				<S.Logo>
					<h1><span>Git</span>flix</h1>
					<img src={gitflix} alt="logo" />
				</S.Logo>
        <S.Form>
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
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => handleClickShowPassword("showPassword")}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
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
              type={values.showPasswordConfirm ? "text" : "password"}
              required={true}
              value={values.confirmPassword}
              onChange={handleChange("confirmPassword")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle confirmpassword visibility"
                    onClick={() =>
                      handleClickShowPassword("showPasswordConfirm")
                    }
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPasswordConfirm ? (
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
              values.name.length <= 2
            }
          >
            Register
          </S.Button>

          <S.Link onClick={() => navigate("/")}>
            Already is registered? Sign In!
          </S.Link>
        </S.Form>
      </S.ContainerForm>
    </S.Divider>
  )
}
