import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import ListIcon from "@mui/icons-material/List";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import SideSectionLogoImg from "../../assets/images/SideSectionLogo.png";

const ProcessSection = () => {
  return (
    <Box
      sx={{
        maxWidth: "100%",
        bgcolor: "#fff",
        padding: "50px 0",
        textAlign: "center",
        position: "relative",
        height: "600px",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          height: "100%",
          width: "50px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={SideSectionLogoImg} width={"15px"} height={"820px"} />
      </Box>
      {/* Section Title */}
      <Typography
        variant="h6"
        sx={{ color: "#FF4081", fontWeight: "bold", letterSpacing: "1px" }}
      >
        OUR PROCESS
      </Typography>
      <Typography
        variant="h3"
        sx={{
          color: "#2b2b2b",
          fontWeight: "bold",
          mt: 1,
        }}
      >
        Swap your skills to Pay the bills.
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
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </Typography>

      {/* Feature Cards */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 12,
          gap: 3,
          position: "relative",
        }}
      >
        {/* Card 1 */}
        <Card
          sx={{
            width: "300px",
            borderRadius: "12px",
            padding: "20px",
            border: "1px solid #e0e0e0",
            position: "relative",
            zIndex: 1, // Ensure cards appear on top of the lines
          }}
        >
          <CardContent>
            <Box
              sx={{
                width: "50px",
                height: "50px",
                backgroundColor: "#FF6F00",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "10px",
                marginBottom: "20px",
              }}
            >
              <ListIcon sx={{ fontSize: 28 }} />
            </Box>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              List your skills
            </Typography>
            <Typography variant="body2" sx={{ color: "#909090", mt: 1 }}>
              Lorem ipsum dolor sit amet consectetur. Integer ut orci nulla mi
              aliquam ultricies tincidunt nunc.
            </Typography>
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card
          sx={{
            width: "300px",
            borderRadius: "12px",
            padding: "20px",
            border: "1px solid #e0e0e0",
            position: "relative",
            zIndex: 1,
          }}
        >
          <CardContent>
            <Box
              sx={{
                width: "50px",
                height: "50px",
                backgroundColor: "#00C853",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "10px",
                marginBottom: "20px",
              }}
            >
              <SwapHorizIcon sx={{ fontSize: 28 }} />
            </Box>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Find a skill swap
            </Typography>
            <Typography variant="body2" sx={{ color: "#909090", mt: 1 }}>
              Lorem ipsum dolor sit amet consectetur. Integer ut orci nulla mi
              aliquam ultricies tincidunt nunc.
            </Typography>
          </CardContent>
        </Card>

        {/* Card 3 */}
        <Card
          sx={{
            width: "300px",
            borderRadius: "12px",
            padding: "20px",
            border: "1px solid #e0e0e0",
            position: "relative",
            zIndex: 1,
          }}
        >
          <CardContent>
            <Box
              sx={{
                width: "50px",
                height: "50px",
                backgroundColor: "#64DD17",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "10px",
                marginBottom: "20px",
              }}
            >
              <DoneAllIcon sx={{ fontSize: 28 }} />
            </Box>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Get job done
            </Typography>
            <Typography variant="body2" sx={{ color: "#909090", mt: 1 }}>
              Lorem ipsum dolor sit amet consectetur. Integer ut orci nulla mi
              aliquam ultricies tincidunt nunc.
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Dotted Lines SVG */}
      <Box
        sx={{
          position: "absolute",
          top: "220px",
          left: 0,
          width: "100%",
          height: "450px",
          zIndex: 0, // Ensure lines are behind the cards
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* First Dotted Line (connecting bottom-right of Card 1 to bottom-left of Card 2) */}
          <path
            d="M 250 270 C 300 500, 520 500, 550 250"
            stroke="#FF4081"
            strokeWidth="3"
            strokeDasharray="5,5"
            fill="none"
          />
          {/* Second Dotted Line (connecting top-right of Card 2 to top-left of Card 3) */}
          <path
            d="M 690 250 C 620 -50, 900 -50, 920 100"
            stroke="#FF4081"
            strokeWidth="3"
            strokeDasharray="5,5"
            fill="none"
          />
        </svg>
      </Box>
    </Box>
  );
};

export default ProcessSection;
