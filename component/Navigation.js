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
import globe from '../images/globe2.png'
import shield from '../images/shield.png'
import log from '../images/log.png'

//  import { IoMdAirplane } from 'react-icons/fa'

const StyledNavigation = styled(Stack)(({ theme }) => ({

      width: '15vw',
      position: 'fixed',
      // backgroundColor: 'grey'
      borderRight: '1px solid #d9e2e8',
      height: "100vh",
      gap: '1em',
      justifyItems: 'center',
      paddingTop: '10vh',
      paddingLeft: ".5em",
      paddingRight:".5em",
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

                        <Link underline={'hover'} href='#'>
                              
                             Sign in

                        </Link>

                  </LinkStack>
                  <Divider orientation={ 'horizontal'} />

                 <LinkStack direction={'row'} gap={'1em'}>
                        
                       <Image src={plane} height={'20px'} width={'20px'}></Image>
                      
                        
                        <Link href='/flights' underline={'hover'} style={{cursor:'pointer'}}>
                              
                        Flights

                        </Link>
                        
                  </LinkStack>

                 <LinkStack>
                        
                        <Image src={stays} height={'20px'} width={'20px'}></Image>
                        
                        <Link href='/stays' underline={'hover'} style={{cursor:'pointer'}}>
                              
                       Stays
                              

                        </Link>
                  </LinkStack>

                  
                 <LinkStack>
                        
                        
                  <Image src={car} height={'20px'} width={'20px'}></Image>
                        <Link href='/car-rentals' underline={'hover'} style={{cursor:'pointer'}}>
                              
                       Cars

                        </Link>
                  </LinkStack>

                 <LinkStack>
                        
                  <Image src={packages} height={'20px'} width={'20px'}></Image>
                        <Link href='vacations' underline={'hover'} style={{cursor:'pointer'}}>
                              
                       Packages

                        </Link>
                  </LinkStack>

                 <LinkStack>
                        
                  <Image src={train} height={'20px'} width={'20px'}></Image>
                        <Link href='/transportations' underline={'hover'} style={{cursor:'pointer'}}>
                              
                       Trains and Buses

                        </Link>
                  </LinkStack>

                  
                  <Divider orientation={ 'horizontal'} />

                  <LinkStack>
                  <Image src={globe} height={'20px'} width={'20px'}></Image>
                        <Link href='#' underline={'hover'} style={{cursor:'pointer'}}>
                              
                      Explore

                        </Link>
                  </LinkStack>

                  {/* <LinkStack>
                        <Link href='#' style={{cursor:'pointer'}}>
                              
                        Flight Tracker

                        </Link>
                  </LinkStack> */}

                  <LinkStack>
                  <Image src={shield} height={'20px'} width={'20px'}></Image>
                        <Link href='#' underline={'hover'} style={{cursor:'pointer'}}>
                              
                      Travel Restrictions

                        </Link>
                  </LinkStack>

                  
                  <Divider orientation={ 'horizontal'} />

                  <LinkStack>
                  <Image src={log} height={'20px'} width={'20px'}></Image>
                        <Link href='#' underline={'hover'} style={{cursor:'pointer'}}>
                              
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