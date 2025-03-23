import React, { useEffect, useState } from "react";
import { Button, CircularProgress, Typography, Box } from "@mui/material";

const GoogleMapsRedirect = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [loading, setLoading] = useState(true);

  // Get user's location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setLoading(false);
        },
        (error) => {
          console.error("Error getting location:", error);
          setLoading(false);
        }
      );
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) return <CircularProgress />;
  if (!userLocation)
    return <Typography color="error">Unable to get your location.</Typography>;

  // Google Maps URL for restaurants near user
  const googleMapsUrl = `https://www.google.com/maps/search/restaurants/@${userLocation.lat},${userLocation.lng},12z`;

  return (
    <Box textAlign="center">
      <Typography variant="h6" gutterBottom>
        Find Nearby Restaurants
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => window.open(googleMapsUrl, "_blank")}
      >
        Open Google Maps
      </Button>
    </Box>
  );
};

export default GoogleMapsRedirect;
