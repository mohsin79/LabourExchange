import React from "react";
import UserLayout from "../../layouts/UserLayout";
import {
  Box,
  Typography,
  TextField,
  Button,
  Chip,
  Grid,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import categoriesBackgroundImg from "../../assets/images/categories_bg.png";
import LaborSection from "./LaborSection";
import ExchangersSlider from "../Home/ExchangersSlider";
import Footer from "../Home/Footer";

const tags = [
  "Administration",
  "Animals",
  "Garden",
  "Automotive",
  "Domestic Services",
  "Labor",
  "Security",
  "Foods and Good",
  "House",
  "Ground Work and Fencing",
  "Manufacturing",
  "Technology",
  "Travel and Transport",
  "Trades",
  "Search more...",
];

const Categories = () => {
  return (
    <UserLayout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          py: 4,
          color: "white",
          textAlign: "center",
          backgroundImage: `url(${categoriesBackgroundImg})`,
          backgroundColor: "#000000",
          height: "590px",
        }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Find whatever and wherever{" "}
          <Typography
            variant="h4"
            component="span"
            color="#7ED321"
            fontWeight="bold"
          >
            and help people to feel.
          </Typography>
        </Typography>

        {/* Search Box */}
        {/* <Box
          sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: "#1e1e30",
            border: "1px solid #72ff8a",
            borderRadius: "8px",
            p: 1,
            mt: 2,
            width: "100%",
            maxWidth: 700,
          }}
        >
          <TextField
            variant="standard"
            placeholder="Search what to exchange..."
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "#ffffff99" }} />
                </InputAdornment>
              ),
            }}
            sx={{
              flex: 1,
              input: { color: "white" },
              ml: 1,
              bgcolor: "transparent",
              border: "none",
            }}
          />
          <TextField
            variant="standard"
            placeholder="Zip code"
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start">
                  <LocationOnIcon sx={{ color: "#ffffff99" }} />
                </InputAdornment>
              ),
            }}
            sx={{
              width: 120,
              ml: 1,
              input: { color: "white" },
              bgcolor: "transparent",
              border: "none",
            }}
          />
          <Button
            variant="contained"
            sx={{
              ml: 1,
              background: "linear-gradient(145deg, #ff6161, #ffa561)",
              color: "white",
              px: 3,
              py: 1,
              fontWeight: "bold",
              borderRadius: "8px",
              ":hover": {
                background: "linear-gradient(145deg, #ffa561, #ff6161)",
              },
            }}
          >
            Search
          </Button>
        </Box> */}

        {/* Tags Section */}
        {/* <Grid
          container
          spacing={1}
          mt={2}
          justifyContent="center"
          sx={{ maxWidth: "718px" }}
        >
          {tags.map((tag, index) => (
            <Grid item key={index}>
              <Chip
                label={tag}
                sx={{
                  backgroundColor: "#1a4567",
                  color: "white",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  px: 1.5,
                  py: 0.5,
                  borderRadius: "20px",
                  "&:hover": {
                    backgroundColor: "#236d93",
                  },
                  ".MuiChip-label": {
                    display: "flex",
                    alignItems: "center",
                  },
                  "& .MuiChip-icon": {
                    color: "#ff6363",
                    mr: 0.5,
                  },
                }}
                clickable
                icon={<SearchIcon />}
              />
            </Grid>
          ))}
        </Grid> */}
      </Box>
      <LaborSection />
      <ExchangersSlider />
      <Footer />
    </UserLayout>
  );
};

export default Categories;
