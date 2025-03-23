import { Box } from "@mui/material";
import NavBar from "../components/NavBar";
import { fullHeightAndWidthStyles } from "../pages/SignUp/styles";

const UserLayout = ({ children }) => {
  return (
    <Box
      component="div"
      sx={{
        ...fullHeightAndWidthStyles,
        overflowY: "scroll",
        backgroundColor: "#010034",
      }}
    >
      <NavBar />
      {children}
    </Box>
  );
};

export default UserLayout;
