import { Box, Grid } from "@mui/material";
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import signUpAnimation from "../assets/lottie/Signup.json"; // Path to your Lottie JSON
import loginAnimation from "../assets/lottie/Login.json"; // Path to your Lottie JSON
import BGLogo from "../assets/images/LoginContainerBgLogo.png";
import logo from "../assets/images/logo2.png";
import circulrArrows from "../assets/images/CircularArrows.png";
import formBackgroundImg from "../assets/images/AuthFormBG.png";
import {
  flexCenterStyles,
  fullHeightAndWidthStyles,
  loginFormContainerStyles,
} from "../pages/SignUp/styles";

const AuthLayout = ({ type = "SignIn", children }) => {
  const imgRef = useRef(null);
  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: imgRef.current, // the container where the animation will be rendered
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: type === "SignIn" ? loginAnimation : signUpAnimation, // the path to the Lottie JSON
    });
    // Clean up on unmount
    return () => anim.destroy();
  }, []);

  return (
    <Box component="div" sx={fullHeightAndWidthStyles}>
      <Grid container mt={0} sx={fullHeightAndWidthStyles}>
        <Grid
          item
          xs={5}
          sx={flexCenterStyles}
          display={type === "SignIn" ? "none" : "flex"}
        >
          <Grid container mt={5} sx={flexCenterStyles}>
            <Box mt="60px">
              <img src={circulrArrows} className="rotate" />
              <img
                src={logo}
                width={400}
                height={52}
                // style={{ marginTop: "60px" }}
              />
            </Box>
            <div ref={imgRef} style={{ width: "500px", height: "500px" }}></div>
            <Grid item xs={12} sx={flexCenterStyles}></Grid>
          </Grid>
        </Grid>
        <Grid
          item
          sx={{
            ...loginFormContainerStyles,
            // backgroundImage: `url(${formBackgroundImg})`,
          }}
          xs={type === "SignUp" ? 7 : 12}
          className={type === "SignIn" ? "login-form" : ""}
        >
          {children}
          {/* {type === "SignUp" && (
            <img
              src={BGLogo}
              alt="Background Logo"
              className="login-form-bg-logo"
            />
          )} */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default AuthLayout;
