// import React, { memo, useRef, useState } from "react";
// import {
//   Autocomplete,
//   TextField,
//   Chip,
//   Box,
//   Grid,
//   MenuItem,
//   Checkbox,
//   ListItemText,
//   InputAdornment,
// } from "@mui/material";
// import CheckIcon from "@mui/icons-material/Check";
// import SearchIcon from "@mui/icons-material/Search";
// import ClearIcon from "@mui/icons-material/Clear";
// import {
//   inputIconStyles,
//   serviceSearchBoxStyle,
//   servicesChipsStyles,
// } from "./styles";

// const options = [
//   { label: "Option 1", value: "option1" },
//   { label: "Option 2", value: "option2" },
//   { label: "Option 3", value: "option3" },
//   { label: "Option 4", value: "option4" },
// ];

// const ServicesInput = memo(() => {
//   const [selectedOptions, setSelectedOptions] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const inputRef = useRef(null);

//   const handleSelectChange = (event, newValue) => {
//     setSelectedOptions(newValue);
//   };

//   const handleInputChange = (newInputValue) => {
//     setSearchTerm(newInputValue);
//   };

//   const handleDeleteChip = (optionToDelete) => {
//     setSelectedOptions((currentOptions) =>
//       currentOptions.filter((option) => option.value !== optionToDelete.value)
//     );
//   };

//   return (
//     <Grid item xs={8.3}>
//       {/* Multi-Select Searchable Dropdown */}
//       <Autocomplete
//         multiple
//         id="checkboxes-tags-demo"
//         options={options}
//         inputValue={searchTerm} // Control search input
//         disableCloseOnSelect={true}
//         getOptionLabel={(option) => option.label}
//         clearOnEscape={false} // Prevent clearing on escape
//         renderOption={(props, option, { selected }) => (
//           <MenuItem
//             {...props}
//             key={option.value}
//             sx={{
//               justifyContent: "space-between", // Space out text and check icon
//               backgroundColor: selected ? "lightblue" : "inherit", // Light blue background for selected items
//             }}
//           >
//             <ListItemText primary={option.label} />
//             {selected && <CheckIcon style={{ color: "blue" }} />}{" "}
//             {/* Check icon at the end */}
//           </MenuItem>
//         )}
//         sx={serviceSearchBoxStyle}
//         value={selectedOptions}
//         onChange={handleSelectChange}
//         // Custom rendering for options with a check icon at the end
//         renderInput={(params) => (
//           <TextField
//             {...params}
//             label=""
//             placeholder="Search for Goods, Trade, Service..."
//             onChange={(e) => handleInputChange(e.target.value)}
//             inputRef={inputRef} // Reference to input
//             InputProps={{
//               ...params.InputProps,
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <SearchIcon sx={inputIconStyles} />{" "}
//                   {/* Search icon as start adornment */}
//                 </InputAdornment>
//               ),
//               // Conditionally render ClearIcon based on the existence of searchTerm or selectedOptions
//               endAdornment: (
//                 <>
//                   {(searchTerm || selectedOptions.length > 0) &&
//                     document.activeElement === inputRef.current && (
//                       <InputAdornment position="end">
//                         <ClearIcon
//                           style={{ cursor: "pointer" }}
//                           onClick={() => {
//                             setSearchTerm(""); // Clear search term on clear icon click
//                             setSelectedOptions([]); // Optionally clear selected options if needed
//                           }}
//                         />
//                       </InputAdornment>
//                     )}
//                   {params.InputProps.endAdornment}
//                 </>
//               ),
//             }}
//           />
//         )}
//         // Hides the chips inside the input field
//         renderTags={() => null}
//       />

//       {/* Chips rendering outside the select box */}
//       <Box sx={{ marginTop: 2 }}>
//         {selectedOptions.map((option) => (
//           <Chip
//             key={option.value}
//             label={option.label}
//             onDelete={() => handleDeleteChip(option)}
//             sx={servicesChipsStyles}
//           />
//         ))}
//       </Box>
//     </Grid>
//   );
// });

// export default ServicesInput;

import React, { memo, useRef, useState } from "react";
import {
  TextField,
  Chip,
  Box,
  Grid,
  InputAdornment,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import {
  inputFeildStyles,
  inputIconStyles,
  labelStyles,
  servicesChipsStyles,
} from "./styles";

const ServicesInput = memo(() => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef(null);

  // Handle the input change (for text typing)
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle adding the typed value as a chip when Enter is pressed
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && searchTerm.trim() !== "") {
      setSelectedOptions((prevOptions) => [
        ...prevOptions,
        {
          label: searchTerm.trim(),
          value: searchTerm.trim().toLowerCase().replace(/\s+/g, "_"),
        },
      ]);
      setSearchTerm(""); // Clear the input field after adding the chip
    }
  };

  // Handle chip deletion
  const handleDeleteChip = (chipToDelete) => {
    setSelectedOptions((currentOptions) =>
      currentOptions.filter((option) => option.value !== chipToDelete.value)
    );
  };

  return (
    <Grid item xs={12}>
      {/* Input field where user can type */}
      <Typography sx={labelStyles}>Skills</Typography>
      <TextField
        label=""
        margin="normal"
        fullWidth
        placeholder="Type and press Enter to add..."
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress} // Trigger on Enter key press
        inputRef={inputRef}
        sx={inputFeildStyles}
        InputProps={
          {
            // startAdornment: (
            //   <InputAdornment position="start">
            //     <SearchIcon sx={inputIconStyles} /> {/* Search icon */}
            //   </InputAdornment>
            // ),
            // endAdornment: (
            //   <>
            //     {(searchTerm || selectedOptions.length > 0) && (
            //       <InputAdornment position="end">
            //         <ClearIcon
            //           style={{ cursor: "pointer" }}
            //           onClick={() => {
            //             setSearchTerm(""); // Clear search term
            //           }}
            //         />
            //       </InputAdornment>
            //     )}
            //   </>
            // ),
          }
        }
      />

      {/* Display the chips outside the input field */}
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
});

export default ServicesInput;
