import React from "react";
import UserLayout from "../../layouts/UserLayout";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import homeBackgroundImg1 from "../../assets/images/home-bg-1.png";
import HowItWorks from "../../assets/images/how_it_works_pic_updated.png";
import ExploreBtnImg from "../../assets/images/Explore-btn.png";
import MetalWorkerImg from "../../assets/images/MetalWorker.png";
import ConstructionWorker from "../../assets/images/ConstructionWorker.png";
import {
  exchangersCarouselButtons,
  exchangersHeading,
  exchangersDivStyles,
  exploreBtnStyles,
  featuredListingContainer,
  featuredTextStyles,
  homePageMainContainer,
  sloganStyle,
  titleAndSearchContainerStyles,
  howItWorksContainer,
} from "./styles";
import Carousel from "react-material-ui-carousel";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import ExchangersSlider from "./ExchangersSlider";
import ProcessSection from "./ProcessSection";
import Services from "./Services";
import FaqComponent from "./FaqComponent";
import Footer from "./Footer";
import SearchBar from "./SearchBar";
import TagLines from "./TagLines";
import { registerNowBtnStyles } from "../../components/styles";

const Home = () => {
  return (
    <UserLayout>
      <Box
        sx={{
          ...homePageMainContainer,
          backgroundImage: `url(${homeBackgroundImg1})`,
        }}
      >
        <Box sx={titleAndSearchContainerStyles}>
          {/* <Button sx={exploreBtnStyles}>
            <img src={ExploreBtnImg} alt="explore-img" />
            &nbsp; Explore what's matter
          </Button> */}
          <Typography sx={sloganStyle}>
            No Bills{" "}
            <span
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                margin: "0px 10px",
                width: "110px",
                // width: "100%",
                // overflow: hidden,
              }}
            >
              {" "}
              <EastIcon
                className="moving-arrow-right"
                fontSize="smaller"
              />{" "}
              <WestIcon className="moving-arrow-left" fontSize="smaller" />
            </span>{" "}
            <span style={{ color: "#7ED321" }}>Swap skills</span>
          </Typography>
          <SearchBar />
        </Box>
      </Box>
      <Box sx={featuredListingContainer}>
        <Grid container>
          <Grid item xs={12}>
            <TagLines />
            <ProcessSection />
            <ExchangersSlider />
            <Services />
            <Box
              sx={{
                ...howItWorksContainer,
                backgroundImage: `url(${HowItWorks})`,
              }}
            >
              <Button
                sx={{
                  ...registerNowBtnStyles,
                  position: "absolute",
                  bottom: "53px",
                  right: "85px",
                }}
                onClick={() => {}}
              >
                Register Now
              </Button>
            </Box>
            <FaqComponent />
            <Footer />
            {/* </Box> */}
          </Grid>
        </Grid>
      </Box>
    </UserLayout>
  );
};

export default Home;
