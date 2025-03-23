import React from "react";
import { Box, InputBase, Button, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const SearchBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: "5px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        overflow: "hidden",
        maxWidth: "600px",
        marginTop: "50px",
        height: "60px",
      }}
    >
      {/* Search Input Field */}
      <Box sx={{ flex: 1, paddingLeft: "20px" }}>
        <InputBase
          placeholder="Search what to exchange..."
          fullWidth
          sx={{
            fontSize: "16px",
          }}
        />
      </Box>

      {/* Divider Line */}
      <Box
        sx={{
          width: "1px",
          backgroundColor: "#ddd",
          height: "40px",
        }}
      />

      {/* Zip Code Input with Icon */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          paddingLeft: "15px",
          paddingRight: "15px",
        }}
      >
        <LocationOnIcon fontSize="small" sx={{ color: "#999" }} />
        <Typography
          variant="body2"
          sx={{
            marginLeft: "5px",
            fontSize: "14px",
            color: "#999",
          }}
        >
          Zip code
        </Typography>
      </Box>

      {/* Search Button */}
      <Button
        variant="contained"
        sx={{
          height: "100%",
          background: "linear-gradient(to right, #FF512F, #DD2476)",
          color: "#fff",
          // borderRadius: "0 50px 50px 0",
          padding: "10px 30px",
          fontWeight: "bold",
          boxShadow: "none",
          "&:hover": {
            background: "linear-gradient(to right, #FF512F, #DD2476)",
            boxShadow: "none",
          },
        }}
        startIcon={<SearchIcon />}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
