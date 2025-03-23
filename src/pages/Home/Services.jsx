import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import TradeServiceImg from "../../assets/images/TradeService.png";
import GoodServiceImg from "../../assets/images/GoodService.png";
import ServicesImg from "../../assets/images/Services.png";

const Services = () => {
  return (
    <Box
      sx={{
        maxWidth: "100%",
        bgcolor: "#fff", // Background color for the section
        padding: "50px 0",
        textAlign: "center",
      }}
    >
      {/* Section Title */}
      <Typography
        variant="h6"
        sx={{ color: "#FF4081", fontWeight: "bold", letterSpacing: "1px" }}
      >
        SERVICES
      </Typography>
      <Typography
        variant="h3"
        sx={{
          color: "#2b2b2b",
          fontWeight: "bold",
          mt: 1,
        }}
      >
        New way to get job done, Exchange your...
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "#909090",
          mt: 2,
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        Lorem ipsum dolor sit amet consectetur. Integer ut orci nulla mi aliquam
        ultricies tincidunt nunc. Aliquet risus nisl sapien egestas ut.
      </Typography>

      {/* Image Grid */}
      <Grid container spacing={3} sx={{ mt: 6 }}>
        {/* Card 1 */}
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              backgroundImage: `url(${TradeServiceImg})`,
              backgroundSize: "cover",
              color: "white",
              height: "550px",
              position: "relative",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                paddingLeft: "20px",
                paddingTop: "20px",
                textAlign: "left",
              }}
            >
              01
            </Typography>
            <Box
              sx={{
                backgroundColor: "transparent",
                position: "absolute",
                bottom: 20,
                padding: "20px",
              }}
            >
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", textAlign: "left" }}
              >
                Trades
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#d0d0d0",
                  marginTop: "10px",
                  textAlign: "left",
                }}
              >
                Lorem ipsum dolor sit amet consectetur. Integer ut orci nulla mi
                aliquam ultricies tincidunt nunc.
              </Typography>
            </Box>
          </Card>
        </Grid>

        {/* Card 2 */}
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              backgroundImage: `url(${GoodServiceImg})`,
              backgroundSize: "cover",
              color: "white",
              height: "550px",
              position: "relative",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                paddingLeft: "20px",
                paddingTop: "20px",
                textAlign: "left",
              }}
            >
              02
            </Typography>
            <Box
              sx={{
                backgroundColor: "transparent",
                position: "absolute",
                bottom: 20,
                padding: "20px",
              }}
            >
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", textAlign: "left" }}
              >
                Goods
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#d0d0d0",
                  marginTop: "10px",
                  textAlign: "left",
                }}
              >
                Lorem ipsum dolor sit amet consectetur. Integer ut orci nulla mi
                aliquam ultricies tincidunt nunc.
              </Typography>
            </Box>
          </Card>
        </Grid>

        {/* Card 3 */}
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              backgroundImage: `url(${ServicesImg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              color: "white",
              height: "550px",
              position: "relative",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                paddingLeft: "20px",
                paddingTop: "20px",
                textAlign: "left",
              }}
            >
              03
            </Typography>
            <Box
              sx={{
                backgroundColor: "transparent",
                position: "absolute",
                bottom: 20,
                padding: "20px",
              }}
            >
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", textAlign: "left" }}
              >
                Services
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#d0d0d0",
                  marginTop: "10px",
                  textAlign: "left",
                }}
              >
                Lorem ipsum dolor sit amet consectetur. Integer ut orci nulla mi
                aliquam ultricies tincidunt nunc.
              </Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Services;
