import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Box paddingX={10}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
