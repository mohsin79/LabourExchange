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

const listings = [
  {
    name: "Bob Smith",
    image: MetalWorkerImg, // Replace with actual image URL
    description: "Metalwork, Gates, Fencing, Metal products, welding",
    popular: true,
  },
  {
    name: "John Doe",
    image: ConstructionWorker, // Replace with actual image URL
    description: "Carpentry, Home Repair, Custom Furniture",
    popular: false,
  },
  {
    name: "Mak",
    image: MetalWorkerImg, // Replace with actual image URL
    description: "Carpentry, Home Repair, Custom Furniture",
    popular: false,
  },
  {
    name: "Jaddy",
    image: ConstructionWorker, // Replace with actual image URL
    description: "Carpentry, Home Repair, Custom Furniture",
    popular: false,
  },
  {
    name: "Don",
    image: MetalWorkerImg, // Replace with actual image URL
    description: "Carpentry, Home Repair, Custom Furniture",
    popular: false,
  },
  {
    name: "Don2",
    image: MetalWorkerImg, // Replace with actual image URL
    description: "Carpentry, Home Repair, Custom Furniture",
    popular: false,
  },
  {
    name: "Don3",
    image: MetalWorkerImg, // Replace with actual image URL
    description: "Carpentry, Home Repair, Custom Furniture",
    popular: false,
  },
  {
    name: "Don4",
    image: MetalWorkerImg, // Replace with actual image URL
    description: "Carpentry, Home Repair, Custom Furniture",
    popular: false,
  },
  // Add more listings as needed
];

const ExchangersSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItems = 4; // Set the number of visible cards

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < listings.length - visibleItems) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <Box
      sx={{
        maxWidth: "100%",
        position: "relative",
        overflow: "hidden",
        bgcolor: "transparent",
        padding: "32px",
        paddingTop: "100px",
        height: "900px",
      }}
    >
      <Typography sx={featuredTextStyles}>FEATURED LISTINGS</Typography>
      <Typography sx={exchangersHeading}>
        Join Our Community Members.
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 3,
          mt: 3,
          transition: "transform 0.5s ease-in-out",
          transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`, // Adjust the translation based on the number of visible cards
        }}
      >
        {listings.map((listing, index) => (
          <Card
            key={index}
            sx={{
              minWidth: `calc(100% / ${visibleItems} - 20px)`, // Adjust card width to fit visible items
              borderRadius: "30px",
              overflow: "hidden",
              bgcolor: "#24263D",
              color: "white",
              backgroundImage: `url(${listing.image})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "530px",
            }}
          >
            <Box sx={{ position: "relative" }}>
              {/* <img
                src={listing.image}
                alt={listing.name}
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
              /> */}
              {listing.popular && (
                <Box
                  sx={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    backgroundColor: "white",
                    color: "#FF1111",
                    padding: "10px 25px",
                    borderRadius: "20px",
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "24px",
                    display: "flex",
                  }}
                >
                  <img src={PopularIconImg} height={"22px"} width={"20px"} />
                  <span style={{ marginLeft: "5px" }}>Popular</span>
                </Box>
              )}
            </Box>
            <CardContent sx={{ position: "absolute", bottom: "0" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {listing.name}
              </Typography>
              <Typography variant="body2" color="grey">
                {listing.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Navigation buttons */}
      <Box
        sx={{
          position: "absolute",
          top: 95,
          right: 100,
          display: "flex",
          gap: 1,
        }}
      >
        <IconButton
          sx={exchangersCarouselButtons}
          aria-label="previous"
          onClick={handlePrev}
        >
          <NavigateBeforeIcon />
        </IconButton>
        <IconButton
          sx={{ ...exchangersCarouselButtons, marginLeft: "10px" }}
          aria-label="next"
          onClick={handleNext}
        >
          <NavigateNextIcon />
        </IconButton>
      </Box>
      <Button
        sx={{ ...registerNowBtnStyles, marginTop: "30px", marginLeft: "10px" }}
        // sx={item === "Register Now" ? registerNowBtnStyles : navbarBtnStyles}
      >
        View More
      </Button>
    </Box>
  );
};

export default ExchangersSlider;
