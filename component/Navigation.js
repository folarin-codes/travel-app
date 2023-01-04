import Image from 'next/image';

import { Stack, Box, Typography, Divider, Link } from '@mui/material'

import styled from '@emotion/styled';

import { theme } from '../theme';

import { RegularButton } from './Button';

import heart from '../images/heart.png'

//  import { IoMdAirplane } from 'react-icons/fa'

const StyledNavigation = styled(Stack)(({ theme }) => ({

      width: '15vw',
      position: 'fixed',
      // backgroundColor: 'grey'
      borderRight:'1px solid #d9e2e8',
      height: "100vh",
      gap: '1em',
      justifyItems: 'center',
      paddingTop:'10vh',
      [theme.breakpoints.down('md')]: {

            
      },
      [theme.breakpoints.down('sm')]: {
            display:'none'
      }

      
}))



export const SideNavigation = () => {

      return (

            <StyledNavigation>
                  <Box>
                        {/* <Image src={MenuIcon}/> */}

                        <Link href='#'>
                              
                             Sign in

                        </Link>

                  </Box>

                  <Stack>
                        
                       
                        {/* <Image width={50} color={red} height={50} src={ <IoMdAirplane/> }></Image> */}
                      
                        
                        <Link href='/flights' style={{cursor:'pointer'}}>
                              
                        Flights

                        </Link>
                        
                  </Stack>

                  <Stack>
                        <Link href='/stays' style={{cursor:'pointer'}}>
                              
                       Stays
                              

                        </Link>
                  </Stack>

                  <Stack>
                        <Link href='/car-rentals' style={{cursor:'pointer'}}>
                              
                       Cars

                        </Link>
                  </Stack>

                  <Stack>
                        <Link href='vacations' style={{cursor:'pointer'}}>
                              
                       Packages

                        </Link>
                  </Stack>

                  <Stack>
                        <Link href='/transportations' style={{cursor:'pointer'}}>
                              
                       Trains and Buses

                        </Link>
                  </Stack>

                  <Stack>
                        Explore
                  </Stack>

                  <Stack>
                        <Link href='#' style={{cursor:'pointer'}}>
                              
                        Flight Tracker

                        </Link>
                  </Stack>

                  <Stack>
                        <Link href='#' style={{cursor:'pointer'}}>
                              
                       Travels Restriction

                        </Link>
                  </Stack>

                  <Stack>
                        <Link href='#' style={{cursor:'pointer'}}>
                              
                       Trips

                        </Link>
                  </Stack>

            </StyledNavigation>
            
      )
}


const StyledBox = styled(Box)({

      height: '25px',
      width: "25px",
      background: 'linear-gradient(135deg,#ff690f 0%,#e8381b 100%)',
      color: "white !important", 
      alignItems: "center",
      display: 'flex',
      justifyItems: "center",
      fontWeight:'bolder'
      
      
})


const NavigationStack = styled(Stack)(({ theme }) => ({

      position: 'fixed',
      width: '100%',
      backgroundColor:"wheat",
      margin: '0 0 5em 15vw',
      padding:'1em 1vw',
     
      zIndex: '10',
      borderBottom:'1px solid #d9e2e8'
     
      
}))

const StyledTypography = styled(Typography)({

      color: 'white',
      fontWeight: '700',
      display: 'flex',
      margin:'0 auto',

})

export const Navigation = () => {

      return (
   
            <NavigationStack>
                  
            <Stack flexDirection={'row'} justifyContent="space-between" sx={{overflow:"hidden" , marginRight:"20vw"}} >

            <Stack flexDirection={'row'} gap='.2em'>
                  <StyledBox>             
                   <StyledTypography>K</StyledTypography>
                  </StyledBox>

                  
                  <StyledBox>
                    <StyledTypography>A</StyledTypography>    
                  </StyledBox>

                  
                  <StyledBox>
                              
                        <StyledTypography>Y</StyledTypography>
                  </StyledBox>

                  
                  <StyledBox>
                        <StyledTypography>A</StyledTypography>
                  </StyledBox>

                  
                        <StyledBox>
                              
                        <StyledTypography>K</StyledTypography>
                  </StyledBox>


                  </Stack>

                  <Stack flexDirection={'row'} gap="1em">
                              <Link underline='false'>Business</Link>
                              <Link  underline='false'>Trip</Link>
                              <Divider orientation='vertical' />
                              <Image src={heart}/>
                              <RegularButton>Sign in</RegularButton>
                  </Stack>
                  
                        
            </Stack>



            
            </NavigationStack>
            
      )
      
}