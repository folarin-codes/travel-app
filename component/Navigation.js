import Image from 'next/image';

import Link from 'next/link'

import { Stack, Box, Typography, Divider } from '@mui/material'

import styled from '@emotion/styled';

 import { IoMdAirplane } from 'react-icons/fa'

const StyledNavigation = styled(Stack)(({ theme }) => ({

      width: '15vw',
      position: 'fixed',
      // backgroundColor: 'grey'
      borderRight:'1px solid grey',
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

export const Navigation = () => {

      <Stack>
            
      </Stack>
      
}