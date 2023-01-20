import Image from 'next/image';

import { Stack, Box, Typography, Divider, Link } from '@mui/material'

import styled from '@emotion/styled';

import { theme } from '../theme';

import { RegularButton } from './Button';

import heart from '../images/heart.png'

import car from '../images/car.png';
import plane from '../images/plane.png';
import packages from '../images/packages.png';
import stays from '../images/stays.png';
import train from '../images/train.png';
import profile from '../images/profile.png'

//  import { IoMdAirplane } from 'react-icons/fa'

const StyledNavigation = styled(Stack)(({ theme }) => ({

      width: '15vw',
      position: 'fixed',
      // backgroundColor: 'grey'
      borderRight: '1px solid #d9e2e8',
      height: "100vh",
      gap: '.5em',
      justifyItems: 'center',
      paddingTop: '10vh',
      paddingLeft:".5em",
      [theme.breakpoints.down('md')]: {

            
      },
      [theme.breakpoints.down('sm')]: {
            display: 'none'
      }

      
}));

const LinkStack = styled(Stack)(({ theme }) => ({
      flexDirection: "row",
      gap: "1em",
      alignItems: "center",
      borderRadius: "5px",
      margin: "0 5px 0 0",
      padding:".5em",
      
      '&:hover': {
            backgroundColor: "rgba(217,226,232,0.6)",
            cursor:"pointer",
      }
}));

export const SideNavigation = () => {

      return (

            <StyledNavigation>
                  <LinkStack>
                        <Image  src={profile} height={'20px'} width={'20px'}/>

                        <Link href='#'>
                              
                             Sign in

                        </Link>

                  </LinkStack>

                 <LinkStack direction={'row'} gap={'1em'}>
                        
                       <Image src={plane} height={'20px'} width={'20px'}></Image>
                      
                        
                        <Link href='/flights' style={{cursor:'pointer'}}>
                              
                        Flights

                        </Link>
                        
                  </LinkStack>

                 <LinkStack>
                        
                        <Image src={stays} height={'20px'} width={'20px'}></Image>
                        
                        <Link href='/stays' style={{cursor:'pointer'}}>
                              
                       Stays
                              

                        </Link>
                  </LinkStack>

                  
                 <LinkStack>
                        
                        
                  <Image src={car} height={'20px'} width={'20px'}></Image>
                        <Link href='/car-rentals' style={{cursor:'pointer'}}>
                              
                       Cars

                        </Link>
                  </LinkStack>

                 <LinkStack>
                        
                  <Image src={packages} height={'20px'} width={'20px'}></Image>
                        <Link href='vacations' style={{cursor:'pointer'}}>
                              
                       Packages

                        </Link>
                  </LinkStack>

                 <LinkStack>
                        
                  <Image src={train} height={'20px'} width={'20px'}></Image>
                        <Link href='/transportations' style={{cursor:'pointer'}}>
                              
                       Trains and Buses

                        </Link>
                  </LinkStack>

                  <LinkStack>
                        Explore
                  </LinkStack>

                  <LinkStack>
                        <Link href='#' style={{cursor:'pointer'}}>
                              
                        Flight Tracker

                        </Link>
                  </LinkStack>

                  <LinkStack>
                        <Link href='#' style={{cursor:'pointer'}}>
                              
                       Travels Restriction

                        </Link>
                  </LinkStack>

                  <LinkStack>
                        <Link href='#' style={{cursor:'pointer'}}>
                              
                       Trips

                        </Link>
                  </LinkStack>

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
                              <Link >Business</Link>
                              <Link >Trip</Link>
                              <Divider orientation='vertical' />
                              <Image src={heart}/>
                              <RegularButton>Sign in</RegularButton>
                  </Stack>
                  
                        
            </Stack>



            
            </NavigationStack>
            
      )
      
}