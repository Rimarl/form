 import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";
//  import logo from "../../assets/logo.png";
import {Provider } from 'react-redux'


 const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
   return (
   
    <Provider  >
      <Box
        width="100%"
      backgroundColor={theme.palette.background.alt}
       p="1rem 6%"
         textAlign="center"
      >
  <Box
               component="img"
                alt="profile"
                // src={logo}
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
     >
        <Typography fontWeight="500" variant="h5" color={theme.palette.secondary.main} sx={{ mb: "1.5rem" }}>
        Bienvenue sur MOBILIS !
         </Typography>
        <Form />
      </Box>
//     </Provider >
  );
 };

 export default LoginPage;
