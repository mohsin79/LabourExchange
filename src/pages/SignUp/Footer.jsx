import { useNavigate } from "react-router-dom";
import { Divider, Grid, Typography } from "@mui/material";
import googleBtn from "../../assets/images/GoogleBtn.png";
import React from "react";
import {
  dividerStyles,
  footerTextStyles,
  formContainerGridStyles,
  flexCenterStyles,
  verifyTextStyles,
} from "./styles";

const Footer = () => {
  const navigate = useNavigate();

  const navigateToSignIn = () => {
    navigate("/auth/login");
  };
  return (
    <Grid container m={0} rowGap={2} columnGap={2} sx={formContainerGridStyles}>
      <Grid item xs={8} mt={4}>
        <Typography sx={footerTextStyles}>
          have an account?
          <span className="signin-link" onClick={navigateToSignIn}>
            Sign In!
          </span>
        </Typography>
      </Grid>
      {/* <Grid item xs={8}>
        <Divider sx={dividerStyles}>Or continue with</Divider>
      </Grid>
      <Grid item xs={8} sx={flexCenterStyles}>
        <img src={googleBtn} />
      </Grid> */}
      {/* <Grid item xs={8} sx={flexCenterStyles} mt={2}>
        <Typography sx={verifyTextStyles}>
          By continuing you indicate that you read and agreed to the Terms of
          Use
        </Typography>
      </Grid> */}
    </Grid>
  );
};

export default Footer;
