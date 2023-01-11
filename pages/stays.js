import Image from 'next/image'

import { Stack, Box, Typography } from '@mui/material';

import styled from '@emotion/styled'

import Slider from 'react-slick';


import { RegularButton } from '../component/Button';

import { Container } from '../component/Container';

import Subscribe from '../component/Subscribe';

import { SearchBox } from '../component/Search';

import Destinations from '../component/Destinations';

import { NextArrow, PrevArrow } from '../component/Arrows';

import search from '../images/search.svg';

import hero from '../images/hero.jpeg';

import hotel1 from '../images/hotel1.jpg';
import hotel2 from '../images/hotel2.jpg';
import hotel3 from '../images/hotel3.jpeg';
import hotel4 from '../images/hotel4.jpg';
import hotel5 from '../images/hotel5.jpg';
import hotel6 from '../images/hotel6.jpg';
import hotel7 from '../images/hotel7.jpg';
import hotel8 from '../images/hotel8.jpg';


export const StyledInput = styled('input')({
      outline: 'none',
      border: 'none',
      backgroundColor: '#e5ebf0',
      padding: '1em  2em',
      borderRadius:'5px'
      
})

export const MainStack = styled(Stack)(({ theme }) => ({
      // paddingLeft:'20vw'
      gap:'1em'
 
}))

const ImageContainer = styled(Stack)(({ theme }) => ({

      flexDirection: 'row',
      gap:'1em',
      [theme.breakpoints.down('md')]: {
            
      }
      
}))

export const InputStack = styled(Stack)(({ theme }) => ({

      display: 'flex',
      flexDirection: 'row',
      // gap: '1em',
      justifyContent:'space-between'
      
}))


const StaysContainer = styled(Stack)(({ theme }) => ({

      flexDirection: "row",
      flexWrap:'wrap'

      
}))




const Stays = () => {

      const sliderSettings = {
            dots: false,
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />
      }

      return (

            <Container>
                  
                  <Box>
                        
                         <Typography variant='h1' component={'h1'}>Where are you staying?</Typography>

                  </Box>

                  <InputStack>
                        <StyledInput placeholder='Enter a city, hotel or landmark' />
                        <StyledInput/>
                        <StyledInput/>
                        <StyledInput />

                        <SearchBox>
                              
                              <Image src={search} height='20' width='20'/>

                        </SearchBox>

                  </InputStack>


                  <Box>
                        <Image src={hero} height={1000} placeholder='blur' loading='lazy' style={{borderRadius:'10px'}} />
                  </Box>

                  <Stack>
                        <Stack direction={'row'} sx={{ justifyContent: 'space-between'}}>
                              <Box>
                                    <Typography component={'h2'} variant='h2'>Stays in Lagos</Typography>
                                    <Typography component={'p'} variant='p'>Wed, Dec 7 - Thu, Dec 8</Typography>
                              </Box>

                              <RegularButton>See all</RegularButton>
                        </Stack>

                        {/* <StaysContainer> */}
                              
                              <Slider {...sliderSettings}>

                              <Box>
                                    <Image src={hotel1} height="250px" width='250px' style={{borderRadius:"10px"}}/>
                              </Box>

                              <Box>
                                    <Image src={hotel2} height="250px" width='250px' style={{borderRadius:"10px"}}/>
                              </Box> <Box>
                                    <Image src={hotel3} height="250px" width='250px' style={{borderRadius:"10px"}}/>
                              </Box> <Box>
                                    <Image src={hotel4} height="250px" width='250px' style={{borderRadius:"10px"}}/>
                              </Box> <Box>
                                    <Image src={hotel5} height="250px" width='250px' style={{borderRadius:"10px"}}/>
                              </Box> <Box>
                                    <Image src={hotel6} height="250px" width='250px' style={{borderRadius:"10px"}}/>
                              </Box> <Box>
                                    <Image src={hotel7} height="250px" width='250px' style={{borderRadius:"10px"}}/>
                              </Box> <Box>
                                    <Image src={hotel8} height="250px" width='250px' style={{borderRadius:"10px"}}/>
                                    </Box>
                                    
                        </Slider>

                        {/* </StaysContainer> */}

                  </Stack>

                  
                  <MainStack>
                        
                        <Typography component={'h3'} variant='h3'>Your holiday travel guide</Typography>

                        <Stack direction="row" justifyContent={'space-between'} gap='5em'>
                              <Typography>Going somewhere to celebrate this season? Whether you are going home or somewhere to roam, we have got the travel tools to get you to your destination.</Typography>

                              <RegularButton>See all</RegularButton>
                        </Stack>

                        <Destinations/>

                      

                  </MainStack>


                  <Subscribe/>
                  
            </Container>
            
      )
}

export default Stays;