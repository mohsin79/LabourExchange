import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MetalWorkerImg from "../../assets/images/MetalWorker.png";
import { registerNowBtnStyles } from "../../components/styles";

const listings = [
  {
    id: 1,
    name: "Bob Smith",
    image: MetalWorkerImg,
    tags: ["Dog Walking", "Cooking", "UI Designer"],
  },
  {
    id: 2,
    name: "Will Jacks",
    image: MetalWorkerImg,
    tags: ["Dog Walking", "Cooking", "UI Designer"],
  },
  {
    id: 3,
    name: "Scot Ryan",
    image: MetalWorkerImg,
    tags: ["Dog Walking", "Cooking", "UI Designer"],
  },
  {
    id: 4,
    name: "Kristina White",
    image: MetalWorkerImg,
    tags: ["Dog Walking", "Cooking", "UI Designer"],
  },
  {
    id: 5,
    name: "Bob Smith",
    image: MetalWorkerImg,
    tags: ["Dog Walking", "Cooking", "UI Designer"],
  },
];

const tags = [
  "Dog Walking",
  "Cooking",
  "UI Designer",
  "App Developer",
  "More...",
];

const LaborSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
      }}
    >
      <Box
        sx={{
          padding: "30px 100px",
        }}
      >
        <Box sx={{ p: 2 }}>
          {/* Header */}
          <Typography variant="h4" fontWeight="bold" mb={2}>
            Labor:
          </Typography>

          {/* Filters Row */}
          <Grid container spacing={2}>
            <Grid item xs={2} sx={{ paddingLeft: "0 !important" }}>
              {/* Search Field */}
              <TextField
                variant="outlined"
                placeholder="Search to exchange..."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: "#ff4060" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  flex: 1,
                  backgroundColor: "white",
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    "& fieldset": {
                      borderColor: "rgba(255, 99, 132, 0.5)",
                    },
                    "&:hover fieldset": {
                      borderColor: "#ff4060",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#ff4060",
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={2}>
              {/* Tags Select */}
              <Select
                variant="outlined"
                defaultValue="All Tags"
                sx={{
                  flex: 1,
                  width: "100%",
                  backgroundColor: "white",
                  borderRadius: 2,
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(255, 99, 132, 0.5)",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#ff4060",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#ff4060",
                  },
                }}
              >
                <MenuItem value="All Tags">All Tags</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={2}>
              {/* Category Select */}
              <Select
                variant="outlined"
                defaultValue="All Category"
                sx={{
                  flex: 1,
                  width: "100%",
                  backgroundColor: "white",
                  borderRadius: 2,
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(255, 99, 132, 0.5)",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#ff4060",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#ff4060",
                  },
                }}
              >
                <MenuItem value="All Category">All Category</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={2}>
              {/* Location Field */}
              <TextField
                variant="outlined"
                placeholder="Town or Postcode"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationOnIcon sx={{ color: "#ff4060" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  flex: 1,
                  width: "100%",
                  backgroundColor: "white",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    "& fieldset": {
                      borderColor: "rgba(255, 99, 132, 0.5)",
                    },
                    "&:hover fieldset": {
                      borderColor: "#ff4060",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#ff4060",
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={2}>
              {/* Sort By Select */}
              <Select
                variant="outlined"
                defaultValue="Newest First"
                sx={{
                  flex: 1,
                  width: "100%",
                  backgroundColor: "white",
                  borderRadius: 2,
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(255, 99, 132, 0.5)",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#ff4060",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#ff4060",
                  },
                }}
              >
                <MenuItem value="Newest First">Newest First</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={2}>
              {/* Add New Listing Button */}
              <Button sx={{ ...registerNowBtnStyles, padding: "17px 20px" }}>
                Add New Listing
              </Button>
            </Grid>
          </Grid>
        </Box>

        {/* Listings */}
        <Grid container spacing={2}>
          {listings.map((listing) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={listing.id}>
              <Box
                sx={{
                  position: "relative",
                  height: 450,
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: 3,
                }}
              >
                {/* Background Image */}
                <Box
                  component="img"
                  src={listing.image}
                  alt="Profile background"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />

                {/* Overlay */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: 2,
                  }}
                >
                  {/* Name */}
                  <Typography variant="h6" color="white" fontWeight="bold">
                    Will Jacks
                  </Typography>

                  {/* Tags */}
                  <Grid container spacing={1} mt={1}>
                    {tags.map((tag, index) => (
                      <Grid item key={index}>
                        <Chip
                          label={tag}
                          sx={{
                            backgroundColor: "#b10000",
                            color: "white",
                            fontSize: "0.8rem",
                            fontWeight: "500",
                            height: 24,
                            borderRadius: 2,
                          }}
                        />
                      </Grid>
                    ))}
                  </Grid>

                  {/* Button */}
                  <Button
                    variant="outlined"
                    sx={{
                      mt: 2,
                      color: "white",
                      borderColor: "white",
                      fontWeight: "bold",
                      borderRadius: 2,
                      textTransform: "none",
                      ":hover": {
                        borderColor: "#b10000",
                        backgroundColor: "#b10000",
                      },
                    }}
                  >
                    Start Exchange
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default LaborSection;
