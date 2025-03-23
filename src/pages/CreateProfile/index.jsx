import React, { useState } from "react";
import AuthLayout from "../../layouts/AuthLayout";
import {
  Box,
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
  fullHeightAndWidthStyles,
  inputFeildStyles,
  inputIconStyles,
  labelStyles,
  loginFormContainerStyles,
  submitBtnStyles,
} from "../SignUp/styles";
import { useNavigate } from "react-router-dom";
import ServicesInput from "../SignUp/ServicesInput";
import CategoryDropdown from "./CategoryDropdown";
import NavBar from "../../components/NavBar";

const loginFormLabels = {
  name: "Name",
  email: "Email",
  phoneNo: "Phone Number",
  address: "Address",
  skills: "Skills",
  category: "Category",
};

const loginFeilds = [
  // "name",
  // "email",
  // "phoneNo",
  // "address",
  "category",
  "skills",
];

// const loginFormInputIcons = {
//   email: <TelegramIcon sx={inputIconStyles} />,
//   password: <KeyIcon sx={inputIconStyles} />,
// };

const CreateProfile = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    phoneNo: "",
    address: "",
    category: "",
    skills: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // const renderInputIcon = (feild) => {
  //   return loginFormInputIcons[feild];
  // };

  const renderLoginFormFeilds = (feild) => {
    if (feild === "skills") {
      return <ServicesInput />;
    } else if (feild === "category") {
      return <CategoryDropdown />;
    }
    return (
      <Grid item xs={4}>
        <Typography sx={labelStyles}>{loginFormLabels[feild]}</Typography>
        <TextField
          // size="medium"
          margin="normal"
          required
          fullWidth
          id={`${feild}-id`}
          // InputProps={{
          //   startAdornment: (
          //     <InputAdornment position="start">
          //       {renderInputIcon(feild)}
          //     </InputAdornment>
          //   ),
          // }}
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
  };

  return (
    <Box component="div" sx={fullHeightAndWidthStyles}>
      <NavBar />
      <Grid container mt={0} sx={fullHeightAndWidthStyles}>
        <Grid
          item
          sx={{
            ...loginFormContainerStyles,
            // backgroundImage: `url(${formBackgroundImg})`,
          }}
          xs={12}
          className={"login-form"}
        >
          {/* <Grid item xs={6} sx={{ textAlign: "center", marginBottom: "20px" }}> */}
          <Typography sx={formTitleStyles}>Create Profile</Typography>
          {/* <img
                  src={logo}
                  width={330}
                  // height={62}
                  // style={{ marginTop: "60px" }}
                /> */}
          {/* </Grid> */}
          <form
            autoComplete="off"
            style={{ width: "700px" }}
            onSubmit={() => {}}
          >
            <Grid
              container
              m={0}
              rowGap={2}
              columnGap={3}
              sx={formContainerGridStyles}
            >
              {loginFeilds.map((feild) => renderLoginFormFeilds(feild))}
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  sx={submitBtnStyles}
                  onClick={() => {}}
                >
                  Create
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CreateProfile;
