import Image from "next/image";

import { Stack, Box, Typography } from '@mui/material';

import styled from "@emotion/styled";

import { RegularButton } from "./Button";

import globe from '../images/globe.png'

import { theme } from "../theme";

const StyledStack = styled(Stack)(({ theme }) => ({

      border: '1px solid #d9e2e8',
      borderRadius: "5px",
      flexDirection: "row",
      padding: '1em 3em',
      gap: '3em',
      justifyItems: 'center',
      alignItems:"center"
      
}))

const StyledInput = styled('input')(() => ({

      borderRadius: "5px",
      padding: '.5em 1em',
      outline: 'none',
      border: '1px solid #d9e2e8',
      transition: "all .5s ease",
      width:'70%',
      
      '&:hover': {
            backgroundColor: 'rgba(217,226,232,0.6)',
            border: '1px solid black',
            
      }
      
}))


const Subscribe = () => {

      return (

            <StyledStack>
                  
                  <Box>
                        <Image src={globe} height='150' width={150} />
                  </Box>

                  <Stack gap={'.5em'}>
                        <Typography variant="h4" component={'h4'}>Receive Our Newsletter.</Typography>
                        <Typography> Sign up for email updates with travel recommendations and Private Deals.</Typography>

                        <Stack sx={{flexDirection:'row' , gap:'1em'}}>
                              <StyledInput placeholder="Enter Your email address"  ></StyledInput>
                              <RegularButton>Let's do this</RegularButton>
                        </Stack>
                  </Stack>
                  

            </StyledStack>

      )
}

export default Subscribe;