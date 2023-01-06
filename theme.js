import { createTheme } from "@mui/material"

export const theme = createTheme({
      typography: {
            
      },
      palette: {
            primary: {
                  main : '#1B1C1E'
                 
            }
      },
      typography: {
            h1: {
                  fontSize: "40px",
                  fontWeight: '600',
                  color:'#212a30 !important'
            },
            h2: {
                  fontSize:'32px',
                  fontWeight:'600',
                  color:'#212a30  !important'
                  
            },
            p: {
                  fontSize: '14px',
                  
                  color:'#212a30  !important'
            },
            h3: {
                  fontSize:'24px',
                  fontWeight:'600',
                  color:'#212a30  !important'
            },
            h4: {
                  fontSize:'16px',
                  fontWeight:'600',
                  color:'#212a30 !important'
            },
            h6: {
                  fontSize: '12px',
                  

            }

      },
      breakpoints: {
            values: {
                  xs: 0,
                  sm: 600,
                  md: 1024,
                  lg: 1200,
                  xl: 1536,
            }
      }
      
})