import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import MetalWorkerImg from "../../assets/images/MetalWorker.png";
import ConstructionWorker from "../../assets/images/ConstructionWorker.png";
import PopularIconImg from "../../assets/images/PopularIcon.png";
import {
  exchangersCarouselButtons,
  exchangersHeading,
  featuredTextStyles,
} from "./styles";
import { registerNowBtnStyles } from "../../components/styles";

const TagLines = () => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        bgcolor: "transparent",
        padding: "32px",
        paddingTop: "100px",
        height: "350px",
        maxWidth: "1050px",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <Typography sx={exchangersHeading} className="elegant-text">
        "The Labour Exchange is a membership hub which gives acces to people who
        can provide skills, services and items you would normally pay for."
      </Typography>
    </Box>
  );
};

export default TagLines;
