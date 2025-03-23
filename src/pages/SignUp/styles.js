const fullHeightAndWidthStyles = {
  width: "100%",
  height: "100%",
};

const formContainerGridStyles = {
  justifyContent: "center",
};

const loginFormContainerStyles = {
  // backgroundColor: "#0F1D2D",
  backgroundColor: "#010034",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const inputFeildStyles = {
  backgroundColor: "#FFF",
  borderRadius: "8px",
  color: "#0000004D",
};

const labelStyles = {
  fontWeight: "500",
  lineHeight: "18.15px",
  letterSpacing: "0.005em",
  color: "#FFFFFF",
};

const formTitleStyles = {
  fontSize: "30px",
  fontWeight: "500",
  lineHeight: "36px",
  color: "#FFFFFF",
  marginBottom: "20px",
};

const stepLabelStyles = {
  fontSize: "30px",
  fontWeight: "500",
  lineHeight: "36px",
  letterSpacing: "0.005em",
  ".MuiStepLabel-label": {
    color: "#FFFFFF",
  },
  ".MuiStepLabel-label.Mui-active, .MuiStepLabel-label.Mui-completed": {
    color: "rgba(234, 90, 14, 1)",
  },
};

const stepStyles = {
  ".MuiStepLabel-root .MuiStepLabel-iconContainer.Mui-active svg,.MuiStepLabel-root .MuiStepLabel-iconContainer.Mui-completed svg":
    {
      color: "rgba(234, 90, 14, 1)",
    },
  ".MuiStepLabel-iconContainer.Mui-disabled .MuiSvgIcon-root circle": {
    color: "#fff",
  },
  ".MuiStepLabel-iconContainer.Mui-disabled .MuiSvgIcon-root text": {
    fill: "#000000",
  },
  ".MuiStepConnector-root.Mui-active .MuiStepConnector-line, .MuiStepConnector-root.Mui-completed .MuiStepConnector-line":
    {
      borderColor: "rgba(234, 90, 14, 1)",
    },
};

const stepperStyles = {
  //   maxWidth: "calc(100% - 200px)",
  marginBottom: "20px",
};

const submitBtnStyles = {
  width: "100%",
  height: "58px",
  background: "linear-gradient(180deg, #EA5A0E 0%, #E7216C 100%)",
  borderRadius: "8px",
};

const footerTextStyles = {
  fontSize: "18px",
  fontWeight: "500",
  lineHeight: "14.5px",
  textAlign: "center",
  color: "#fff",
};

const dividerStyles = {
  color: "#fff",
  "::before": {
    borderTop: "thin solid #fff",
  },
  "::after": {
    borderTop: "thin solid #fff",
  },
};

const flexCenterStyles = {
  justifyContent: "center",
  backgroundColor: "#010034",
};

const verifyTextStyles = {
  color: "#999999",
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "14.5px",
};

const serviceSearchBoxStyle = {
  ".MuiInputBase-root": {
    backgroundColor: "#fff",
    borderRadius: "8px",
  },
  ".MuiAutocomplete-endAdornment .MuiButtonBase-root.MuiIconButton-root.MuiAutocomplete-clearIndicator":
    {
      display: "none",
    },
  ".MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-fullWidth.MuiInputBase-formControl.MuiInputBase-adornedStart.MuiInputBase-adornedEnd.MuiAutocomplete-inputRoot":
    {
      paddingRight: "35px",
    },
};

const servicesChipsStyles = {
  ".MuiChip-label, .MuiChip-deleteIcon": {
    color: "#FFFFFF",
  },
  ".MuiChip-deleteIcon:hover": {
    color: "#FFFFFF",
  },
  border: "1px solid #EA5A0E",
  backgroundColor: "#E8334E2B",
  padding: "4px",
  margin: "4px 2px",
  //   borderColor: "linear-gradient(180deg, #EA5A0E 0%, #E7216C 100%)",
  //   borderImageSource: "linear-gradient(180deg, #EA5A0E 0%, #E7216C 100%)",
};

const inputIconStyles = {
  color: "#E7216C",
};

export {
  inputIconStyles,
  servicesChipsStyles,
  serviceSearchBoxStyle,
  verifyTextStyles,
  flexCenterStyles,
  dividerStyles,
  footerTextStyles,
  submitBtnStyles,
  stepperStyles,
  stepStyles,
  fullHeightAndWidthStyles,
  loginFormContainerStyles,
  inputFeildStyles,
  labelStyles,
  formContainerGridStyles,
  formTitleStyles,
  stepLabelStyles,
};
