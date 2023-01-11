
import { ThemeProvider } from "@mui/material";

import { SideNavigation, Navigation } from "../component/Navigation";
import Footer from "../component/Footer";


import { theme } from "../theme";

const Layout = ({children}) => {
      return (
            <ThemeProvider theme={theme}>
                  
                  <div>

                        
                        <Navigation/>

                        <SideNavigation />

                        {
                              children
                        }

                              <Footer />
                  </div>
                  

             </ThemeProvider>
            
      )
}

export default Layout;