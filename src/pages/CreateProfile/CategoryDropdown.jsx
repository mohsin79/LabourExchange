import React, { useState } from "react";
import {
  Autocomplete,
  TextField,
  Chip,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import { inputFeildStyles, labelStyles, servicesChipsStyles } from "./styles";

const options = [
  { label: "Farming", value: "farming" },
  { label: "Gardening", value: "gardening" },
  { label: "Plumbing", value: "plumbing" },
  { label: "Painting", value: "painting" },
  { label: "Construction", value: "construction" },
  { label: "Electrical", value: "electrical" },
  { label: "Landscaping", value: "landscaping" },
];

const CategoryDropdown = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  // Handle selection change
  const handleSelectChange = (event, newValue) => {
    setSelectedOptions(newValue);
  };

  // Handle chip deletion
  const handleDeleteChip = (chipToDelete) => {
    setSelectedOptions((currentOptions) =>
      currentOptions.filter((option) => option.value !== chipToDelete.value)
    );
  };

  return (
    <Grid item xs={12}>
      <Typography sx={labelStyles}>Category</Typography>

      {/* Dropdown Selection */}
      <Autocomplete
        multiple
        id="multi-select-dropdown"
        options={options}
        value={selectedOptions}
        onChange={handleSelectChange}
        getOptionLabel={(option) => option.label}
        isOptionEqualToValue={(option, value) => option.value === value.value}
        disableClearable
        sx={{
          width: "100%",
          "& .MuiOutlinedInput-root": {
            minHeight: "48px",
          },
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Select skills..."
            fullWidth
            sx={inputFeildStyles}
            InputProps={{
              ...params.InputProps,
              startAdornment: [], // Hides selected options from input box
            }}
          />
        )}
      />

      {/* Scrollable Chips Container */}
      <Box
        sx={{
          marginTop: 2,
          maxHeight: "100px",
          overflowY: "auto",
          display: "flex",
          gap: "8px",
          padding: "8px",
          borderRadius: "4px",
        }}
      >
        {selectedOptions.map((option) => (
          <Chip
            key={option.value}
            label={option.label}
            onDelete={() => handleDeleteChip(option)}
            sx={servicesChipsStyles}
          />
        ))}
      </Box>
    </Grid>
  );
};

export default CategoryDropdown;
