import {
  Box,
  Breadcrumbs,
  Button,
  Grid,
  InputAdornment,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import TelegramIcon from "@mui/icons-material/Telegram";
import KeyIcon from "@mui/icons-material/Key";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HomeIcon from "@mui/icons-material/Home";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ServicesInput from "./ServicesInput";
import {
  formContainerGridStyles,
  formTitleStyles,
  inputFeildStyles,
  inputIconStyles,
  labelStyles,
  stepLabelStyles,
  stepStyles,
  stepperStyles,
  submitBtnStyles,
} from "./styles";
import { useNavigate } from "react-router-dom";

const activeTabTitleArr = [
  "Create your Account to Get Started!",
  "Start with your free trial for One-Month...",
  "What you can offer for an exchange?",
];

const loginFeilds = [
  "firstName",
  "lastName",
  "userName",
  "email",
  "password",
  "confirmPassword",
  "address",
  "country",
  "postCode",
];

const paymentFeilds = ["cardHolderName", "cardNumber", "expiryDate", "cvv"];

const loginFormLabels = {
  firstName: "First Name",
  lastName: "Last Name",
  userName: " User Name",
  email: "Email",
  password: "Password",
  confirmPassword: "Confirm Password",
  address: "Address",
  country: "Country",
  postCode: "Post Code",
};

const loginFormInputIcons = {
  firstName: <PersonIcon sx={inputIconStyles} />,
  lastName: <PersonIcon sx={inputIconStyles} />,
  userName: <PersonIcon sx={inputIconStyles} />,
  email: <TelegramIcon sx={inputIconStyles} />,
  password: <KeyIcon sx={inputIconStyles} />,
  confirmPassword: <KeyIcon sx={inputIconStyles} />,
  address: <HomeIcon sx={inputIconStyles} />,
  country: <LocationOnIcon sx={inputIconStyles} />,
  postCode: <LocationOnIcon sx={inputIconStyles} />,
};

const paymentFormInputIcons = {
  cardHolderName: <PersonIcon sx={inputIconStyles} />,
  cardNumber: <CreditCardIcon sx={inputIconStyles} />,
  expiryDate: <CalendarMonthIcon sx={inputIconStyles} />,
  cvv: <KeyIcon sx={inputIconStyles} />,
};

const paymentFormLabels = {
  cardHolderName: "Card Holder Name",
  cardNumber: "Card Number",
  expiryDate: " Expiry Date",
  cvv: "CVV",
};

const paymentFormColEnum = {
  cardHolderName: 8.3,
  cardNumber: 4,
  expiryDate: 2,
  cvv: 2,
};
const SignUpForm = () => {
  const steps = ["Personal Details", "Payments"];

  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/user/home");
  };

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    country: "",
    postCode: "",
  });

  const [paymentForm, setPaymentForm] = useState({
    cardHolderName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const expiryDateValidation = {
    maxLength: 5, // Limit the input length to 5 characters (MM/YY)
    pattern: "(0[1-9]|1[0-2])/[0-9]{2}", // Regex for MM/YY validation
  };

  const [activeStep, setActiveStep] = useState(0);
  const [breadCrumbs, setBreadCrumbs] = useState(["Account Details"]);

  const handleChange = ({ target: { name, value } }) => {
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePaymentFormChange = ({ target: { name, value } }) => {
    setPaymentForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleNext = () => {
    // let newSkipped = skipped;
    // if (isStepSkipped(activeStep)) {
    //   newSkipped = new Set(newSkipped.values());
    //   newSkipped.delete(activeStep);
    // }
    if (activeStep === 2) {
      navigateToHome();
      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleExpiryChange = (e) => {
    let value = e.target.value;

    // Remove any non-numeric characters
    value = value.replace(/\D/g, "");

    // Format MM/YY
    if (value.length >= 3) {
      let month = value.slice(0, 2);
      let year = value.slice(2, 4);

      // Ensure the month does not exceed 12
      if (parseInt(month, 10) > 12) {
        month = "12";
      }
      // Ensure the year does not exceed 99
      if (parseInt(year, 10) > 99) {
        year = "99";
      }

      value = month + "/" + year;
    }
    // Only keep MM/YY (5 characters max)
    setPaymentForm((prevState) => ({
      ...prevState,
      expiryDate: value.slice(0, 5),
    }));
  };

  const handleCardNumberChange = ({ target: { value } }) => {
    let tempValue = value;

    // Remove any non-numeric characters
    tempValue = value.replace(/\D/g, "");
    setPaymentForm((prevState) => ({
      ...prevState,
      cardNumber: tempValue,
    }));
  };

  const renderFormTitle = () => {
    <Grid item xs={8.3}>
      <Typography sx={formTitleStyles}>
        {activeTabTitleArr[activeStep]}
      </Typography>
    </Grid>;
  };

  const renderInputIcon = (feild, login = true) => {
    if (login) return loginFormInputIcons[feild];
    return paymentFormInputIcons[feild];
  };

  const renderLoginFormFeilds = (feild) => (
    <Grid item xs={feild === "address" ? 8.3 : 4}>
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
        placeholder={
          feild === "confirmPassword"
            ? "Confirm Password"
            : `Enter your ${loginFormLabels[feild]}`
        }
        name={feild}
        // autoComplete="email"
        autoFocus
        value={form[feild]}
        onChange={(ev) => handleChange(ev)}
        // onBlur={(ev) => handleChange(ev, true)}
        sx={inputFeildStyles}
      />
    </Grid>
  );

  const renderPaymentForm = (feild) => (
    <Grid item xs={paymentFormColEnum[feild]}>
      <Typography sx={labelStyles}>{paymentFormLabels[feild]}</Typography>
      <TextField
        // size="medium"
        margin="normal"
        required
        fullWidth
        id={`${feild}-id`}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {renderInputIcon(feild, false)}
            </InputAdornment>
          ),
          ...(feild === "expiryDate" && {
            maxLength: 5, // Limit the input length to 5 characters (MM/YY)
            pattern: "(0[1-9]|1[0-2])/[0-9]{2}", // Regex for MM/YY validation
          }),
        }}
        label=""
        placeholder={
          feild === "expiryDate" ? "MM/YY" : paymentFormLabels[feild]
        }
        name={feild}
        // autoComplete="email"
        autoFocus
        value={paymentForm[feild]}
        onChange={(ev) =>
          feild === "expiryDate"
            ? handleExpiryChange(ev)
            : feild === "cardNumber"
            ? handleCardNumberChange(ev)
            : handlePaymentFormChange(ev)
        }
        // onBlur={(ev) => handleChange(ev, true)}
        sx={inputFeildStyles}
      />
    </Grid>
  );

  return (
    <>
      <form autoComplete="off" className="signup-form" onSubmit={handleNext}>
        <Grid
          container
          m={0}
          rowGap={2}
          columnGap={2}
          sx={formContainerGridStyles}
        >
          {/* <Grid item xs={8}>
            <Box sx={{ width: "100%" }}>
              <Breadcrumbs aria-label="breadcrumb">
                <Typography sx={{ color: "#fff" }}>Home</Typography>
                {breadCrumbs.map((item) => (
                  <Typography sx={{ color: "#fff" }}>{item}</Typography>
                ))}
              </Breadcrumbs>
            </Box>
          </Grid> */}

          <Grid item xs={10.3}>
            {/* <Box sx={{ width: "100%" }}> */}
            <Stepper
              sx={stepperStyles}
              activeStep={activeStep}
              alternativeLabel
            >
              {steps.map((label) => (
                <Step sx={stepStyles} key={label}>
                  <StepLabel sx={stepLabelStyles}>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {/* </Box> */}
          </Grid>
        </Grid>
        <Grid
          container
          m={0}
          rowGap={2}
          columnGap={activeStep === 0 ? 3 : 2}
          sx={formContainerGridStyles}
        >
          <Grid item xs={8.3}>
            <Typography sx={formTitleStyles}>
              {activeTabTitleArr[activeStep]}
            </Typography>
          </Grid>
          {renderFormTitle()}
          {activeStep === 0
            ? loginFeilds.map((feild) => renderLoginFormFeilds(feild))
            : paymentFeilds.map((feild) => renderPaymentForm(feild))}
          {/* : (
             <ServicesInput />
           )} */}
          <Grid item xs={8.3}>
            <Button
              variant="contained"
              sx={submitBtnStyles}
              onClick={handleNext}
            >
              {activeStep === 2 ? "Create Account" : "Next"}
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default SignUpForm;
