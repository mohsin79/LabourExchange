const homePageMainContainer = {
  height: "1070px",
  width: "100%",
  //   backgroundColor: "#0F1D2D",
  //   backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const howItWorksContainer = {
  height: "880px",
  width: "100%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  position: "relative",
};

const titleAndSearchContainerStyles = {
  top: "calc(100% - 670px)",
  left: "85px",
  position: "relative",
  height: "425px",
  width: "1000px",
  bottom: "0",
};

const sloganStyle = {
  fontWeight: "700",
  fontSize: "100px",
  lineHeight: "100px",
  color: "#fff",
  letterSpacing: "-4px",
  display: "flex",
  alignItems: "center",
};

const exploreBtnStyles = {
  backgroundColor: "#fff",
  color: "#4A90E2",
  fontSize: "14px",
  fontWeight: "700",
  lineHeight: "17px",
  textTransform: "none",
  borderRadius: "50px",
  padding: "16px 32px",
  ":hover": {
    backgroundColor: "#fff",
  },
};

const featuredListingContainer = {
  height: "100vh",
  backgroundColor: "#010034",
};

const featuredTextStyles = {
  fontWeight: 700,
  fontSize: "23px",
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "#E7216C",
};

const exchangersHeading = {
  fontWeight: "700",
  fontSize: "70px",
  lineHeight: "111px",
  color: "#FFFFFF",
};

const exchangersCarouselButtons = {
  border: "1px solid white",
  background: "transparent",
  svg: {
    color: "#E7216C",
  },
};

const exchangersDivStyles = {
  width: "400px",
  height: "494px",
  borderRadius: "30px",
  // left: 130px,
  // top: 1404px,

  // background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(m1.png), #D9D9D9;
};

export {
  howItWorksContainer,
  exchangersDivStyles,
  exchangersCarouselButtons,
  exchangersHeading,
  featuredTextStyles,
  featuredListingContainer,
  exploreBtnStyles,
  sloganStyle,
  homePageMainContainer,
  titleAndSearchContainerStyles,
};
