import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Link,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FooterLogoImg from "../../assets/images/FooterLogo.png";
import { styled } from "@mui/system";

const Footer = () => {
  // Styled component for input field
  const UnderlineTextField = styled(TextField)({
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "none", // Remove default border
      },
    },
    "& .MuiInputBase-root": {
      //   "&::before": {
      //     content: '""',
      //     display: "block",
      //     width: "100%",
      //     height: "1px",
      //     backgroundColor: "#fff", // Underline color
      //     marginTop: "8px",
      //   },
    },
    "& input": {
      padding: "8px 0", // Padding to match the style in the image
      color: "#fff", // Text color
      borderBottom: "1px solid #fff",
    },
  });

  // Styled component for submit button
  const StyledButton = styled(Button)({
    backgroundColor: "#fff", // White background for the button
    color: "#ff6b6b", // Color for text
    padding: "10px 20px", // Padding to center the text
    borderRadius: "8px", // Rounded corners
    marginTop: "16px",
    textTransform: "none", // Remove uppercase
    fontWeight: "bold",
    boxShadow: "none", // Remove shadow for a flat look
    "&:hover": {
      backgroundColor: "#f0f0f0", // Slight hover effect
      boxShadow: "none",
    },
  });

  return (
    <Box sx={{ backgroundColor: "#0A102D", height: "400px" }}>
      <Grid container spacing={0} sx={{ height: "100%" }}>
        {/* Left Section: Subscribe Form */}
        {/* <Grid
          item
          xs={12}
          md={6}
          sx={{
            background: "linear-gradient(to bottom, #FF512F, #DD2476)",
            color: "white",
            textAlign: "center",
            padding: "40px",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "700",
              fontSize: "95.9999px",
              lineHeight: "108px",
              textAlign: "center",
              color: "#FFFFFF",
            }}
          >
            Subscribe Our Newsletter
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginBottom: "30px",
              maxWidth: "500px",
              margin: "0 auto",
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Nibh vitae a pretium donec.
            Pellentesque nulla eu morbi pellentesque.
          </Typography>
          <Box
            sx={{
              margin: "20px 0",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={FooterLogoImg} // Replace with your logo URL
              alt="Labour Exchange"
              style={{ maxHeight: "50px" }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "500px",
              }}
            >
              <UnderlineTextField
                placeholder="Email Address"
                variant="outlined"
                fullWidth
                InputProps={{
                  style: { color: "white", padding: "0" },
                }}
              />
              <StyledButton variant="contained">Submit</StyledButton>
            </Box>
          </Box>
        </Grid> */}

        {/* Right Section: Links and Company Info */}
        <Grid
          item
          xs={12}
          sx={{
            backgroundColor: "#0A102D", // Dark background as per original
            color: "white",
            padding: "40px",
            textAlign: "left",
            position: "relative",
            backgroundImage: "none", // Remove the background pattern and use solid color
          }}
        >
          {/* <Box
            sx={{
              backgroundColor: "#0b0d50",
              color: "white",
              py: 6,
              px: 3,
              textAlign: "center",
            }}
          > */}
          {/* Footer Text */}
          <Typography
            variant="body2"
            mb={6}
            // mx="auto"
            // maxWidth="600px"
            lineHeight={1.8}
          >
            Lorem ipsum dolor sit amet consectetur. Integer ut orci nulla mi
            aliquam ultricies tincidunt nunc. Aliquet risus nisl sapien egestas
            ut.Lorem ipsum dolor sit amet consectetur. Integer ut orci nulla mi
            aliquam ultricies tincidunt nunc. Aliquet risus nisl sapien egestas
            ut.
          </Typography>

          {/* Links Section */}
          <Box
            display="flex"
            justifyContent="left"
            gap={52}
            mb={8}
            flexWrap="wrap"
          >
            {/* Quick Links */}
            <Box textAlign="left">
              <Typography
                variant="h6"
                fontWeight="bold"
                fontSize="1.5rem"
                mb={3}
              >
                Quick Links
              </Typography>
              <Box display="flex" flexDirection="column" gap={1.5}>
                <Link
                  href="#"
                  underline="none"
                  color="inherit"
                  fontSize="1.1rem"
                >
                  Home
                </Link>
                <Link
                  href="#"
                  underline="none"
                  color="inherit"
                  fontSize="1.1rem"
                >
                  Categories
                </Link>
                <Link
                  href="#"
                  underline="none"
                  color="inherit"
                  fontSize="1.1rem"
                >
                  FAQ
                </Link>
                <Link
                  href="#"
                  underline="none"
                  color="inherit"
                  fontSize="1.1rem"
                >
                  Contact
                </Link>
              </Box>
            </Box>

            {/* Company Links */}
            <Box textAlign="left">
              <Typography
                variant="h6"
                fontWeight="bold"
                fontSize="1.5rem"
                mb={3}
              >
                Company
              </Typography>
              <Box display="flex" flexDirection="column" gap={1.5}>
                <Link
                  href="#"
                  underline="none"
                  color="inherit"
                  fontSize="1.1rem"
                >
                  Terms & Conditions
                </Link>
                <Link
                  href="#"
                  underline="none"
                  color="inherit"
                  fontSize="1.1rem"
                >
                  Cookie Policy
                </Link>
                <Link
                  href="#"
                  underline="none"
                  color="inherit"
                  fontSize="1.1rem"
                >
                  Privacy Policy
                </Link>
              </Box>
            </Box>

            {/* Contact Information */}
            <Box textAlign="left">
              <Typography
                variant="h6"
                fontWeight="bold"
                fontSize="1.5rem"
                mb={3}
              >
                Get In Touch
              </Typography>
              <Typography
                variant="body2"
                color="inherit"
                fontSize="1.1rem"
                mb={0.5}
              >
                +1 (234) 456 7890
              </Typography>
              <Typography
                variant="body2"
                color="inherit"
                fontSize="1.1rem"
                mb={0.5}
              >
                hi@labourexchange.co.uk
              </Typography>
              <Typography variant="body2" color="inherit" fontSize="1.1rem">
                123 Street, Chicago, USA
              </Typography>
            </Box>
          </Box>

          {/* Social Icons */}
          <Box display="flex" justifyContent="left" gap={2}>
            <IconButton
              sx={{
                color: "white",
                borderRadius: "8px",
                width: 48,
                height: 48,
              }}
            >
              <FacebookIcon fontSize="medium" />
            </IconButton>
            <IconButton
              sx={{
                color: "white",
                borderRadius: "8px",
                width: 48,
                height: 48,
              }}
            >
              <TwitterIcon fontSize="medium" />
            </IconButton>
            <IconButton
              sx={{
                color: "white",
                borderRadius: "8px",
                width: 48,
                height: 48,
              }}
            >
              <LinkedInIcon fontSize="medium" />
            </IconButton>
            <IconButton
              sx={{
                color: "white",
                borderRadius: "8px",
                width: 48,
                height: 48,
              }}
            >
              <InstagramIcon fontSize="medium" />
            </IconButton>
          </Box>
          {/* </Box> */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
