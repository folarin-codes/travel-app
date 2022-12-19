import Image from 'next/image';

import { Stack, Box, Typography } from '@mui/material'

import styled from '@emotion/styled';

import { theme } from '../theme';

import dest1 from '../images/dest1.jpeg';
import dest2 from '../images/dest2.jpeg';
import dest3 from '../images/dest3.jpeg';
import dest4 from '../images/dest4.jpeg';

const ImageContainer = styled(Stack)(({ theme }) => ({

      flexDirection: 'row',
      gap:'1em',
      [theme.breakpoints.down('md')]: {
            
      }
      
}))


const Destinations = () => {

      return (

            <ImageContainer>
                   <Stack>
                                    <Box>
                                          
                                          <Image placeholder='blur' height={1200} src={dest1} style={{borderRadius:'10px'}} >

                                          </Image>

                                    </Box>
                                    
                                    <Typography component={'h4'} variant='h4'>Popular Ski and snowboard destinations</Typography>

                                    <Typography component={'p'} variant='p'>See where everyone is headed to shred this season</Typography>

                              </Stack>

                              <Stack>
                                    <Box>
                                          <Image placeholder='blur' height={1200} src={dest2} style={{borderRadius:'10px'}} />

                                    </Box>

                                    
                                    <Typography component={'h4'} variant='h4'>Winter deal destinations in Europe</Typography>

                                    
                                    <Typography component={'p'} variant='p'>Find out which destinations abroad are cheaper compared to this past summer.</Typography>
                              </Stack>

                              <Stack>
                                    <Box>
                                          <Image placeholder='blur' height={1200} src={dest3} style={{borderRadius:'10px'}}/>

                                    </Box>
                                    
                                    <Typography component={'h4'} variant='h4'>Affordable destination for winter</Typography>

                                    
                                    <Typography component={'p'} variant='p'>Experience somewhere new in North America this season without breaking the bank.</Typography>
                              </Stack>  
                              
                              <Stack>
                                    <Box>
                                          <Image placeholder='blur' height={1200} src={dest4} style={{borderRadius:'10px'}}/>

                                    </Box>

                                    
                                    <Typography component={'h4'} variant='h4'>Get home in time for the holidays</Typography>

                                    
                                    <Typography component={'p'} variant='p'>Discover our favourite tools to save money on travel and organize your trip.</Typography>
                              </Stack>
                  

            </ImageContainer>
      )
}

export default Destinations;