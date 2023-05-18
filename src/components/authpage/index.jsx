import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Loginpage from "./Login";
// import Logo from "../../assets/logo.png";

const Authpage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
         p="1rem 6%"
           textAlign="center"
      >
        <Box
          component="img"
          alt="profile"
        //   src={Logo}
          height="80px"
          width="200px"
          sx={{ objectFit: "cover" }}
        />
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
        boxShadow="0px 0px 5px rgba(0, 0, 0, 0.25)"
      >
        <Typography fontWeight="500" variant="h5" color={theme.palette.secondary.main} sx={{ mb: "1.5rem" }}>
        Bienvenue sur MOBILIS !
         </Typography>
        <Loginpage />
      </Box>
    </Box>
  );
};

export default Authpage;
