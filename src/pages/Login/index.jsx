import React, { useState } from "react";
import AuthLayout from "../../layouts/AuthLayout";
import {
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import KeyIcon from "@mui/icons-material/Key";
import logo from "../../assets/images/logo2.png";
import {
  footerTextStyles,
  formContainerGridStyles,
  formTitleStyles,
  inputFeildStyles,
  inputIconStyles,
  labelStyles,
  submitBtnStyles,
} from "../SignUp/styles";
import { useNavigate } from "react-router-dom";

const loginFormLabels = {
  email: "Email",
  password: "Password",
};

const loginFeilds = ["email", "password"];

const loginFormInputIcons = {
  email: <TelegramIcon sx={inputIconStyles} />,
  password: <KeyIcon sx={inputIconStyles} />,
};

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const renderInputIcon = (feild) => {
    return loginFormInputIcons[feild];
  };

  const renderLoginFormFeilds = (feild) => (
    <Grid item xs={4}>
      <Typography sx={labelStyles}>{loginFormLabels[feild]}</Typography>
      <TextField
        // size="medium"
        margin="normal"
        required
        fullWidth
        id={`${feild}-id`}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {renderInputIcon(feild)}
            </InputAdornment>
          ),
        }}
        label=""
        placeholder={`Enter ${loginFormLabels[feild]}`}
        name={feild}
        // autoComplete="email"
        autoFocus
        value={state[feild]}
        onChange={(ev) => handleChange(ev)}
        // onBlur={(ev) => handleChange(ev, true)}
        sx={inputFeildStyles}
      />
    </Grid>
  );

  const navigateToSignUp = () => {
    navigate("/auth/signup");
  };

  return (
    <AuthLayout type="SignIn">
      <form autoComplete="off" onSubmit={() => {}}>
        <Grid
          container
          m={0}
          rowGap={2}
          columnGap={3}
          sx={formContainerGridStyles}
        >
          <Grid
            item
            xs={8.3}
            sx={{ textAlign: "center", marginBottom: "20px" }}
          >
            {/* <Typography sx={formTitleStyles}>
              Login into your Account!
            </Typography> */}
            <img
              src={logo}
              width={330}
              // height={62}
              // style={{ marginTop: "60px" }}
            />
          </Grid>

          {loginFeilds.map((feild) => renderLoginFormFeilds(feild))}
          <Grid item xs={8.3}>
            <Button variant="contained" sx={submitBtnStyles} onClick={() => {}}>
              Log In
            </Button>
          </Grid>
        </Grid>
      </form>
      {/* <Grid
        container
        m={0}
        rowGap={2}
        columnGap={2}
        sx={formContainerGridStyles}
      >
        <Grid item xs={8} mt={4}>
          <Typography sx={footerTextStyles}>
            Dont have an account?
            <span className="signin-link" onClick={navigateToSignUp}>
              Create one!
            </span>
          </Typography>
        </Grid>
      </Grid> */}
    </AuthLayout>
  );
};

export default Login;
