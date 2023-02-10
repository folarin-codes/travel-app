import { useState , useEffect } from 'react';

import { useStoreState  } from 'easy-peasy';

import Image from 'next/image'

import { Stack, Box, Typography , Divider} from '@mui/material';

import styled from '@emotion/styled'

import Slider from 'react-slick';


import DatePicker from 'react-date-picker/dist/entry.nostyle';


import  getLocation from '../requests/location.request';

import { hotelsNearby } from '../hooks/hoteslNearby';

import { locationStore } from '../store/store';

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
import calender from '../images/calender.svg';
import bed from '../images/bed.svg';
import profile from '../images/profile.svg';

import chicago from '../images/chicago.jpg';
import london from '../images/london.jpg'
import mexico from '../images/mexico.jpg'
import miami from '../images/miami.jpg'
import newyork from '../images/newyork.jpg'
import orlando from '../images/orlando.jpg'
import vagas from '../images/vagas.jpg'
import honolulu from '../images/honolulu.jpg'


export const StyledInput = styled('input')({
      outline: 'none',
      border: 'none',
      backgroundColor: '#e5ebf0',
      padding: '1em  2em 1em 1em',
      borderRadius:'5px'
      
})

export const InputContainer = styled(Stack)({
      backgroundColor: '#e5ebf0',
      borderRadius: '5px',
      flexDirection: "row",
      gap: "0em",
      padding:"0 1em"


});

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
      gap: '1em',
      justifyContent:'space-between'
      
}))


const StaysContainer = styled(Stack)(({ theme }) => ({

      flexDirection: "row",
      flexWrap:'wrap'
      
}))

const HotelContainer = styled(Stack)(({ }) => ({
      flexDirection: "row",
      gap: "1em",
      justifyContent: "space-between",
      flexWrap:"wrap"
      
      
}))


const Stays = () => {

      
      const { location, isLoading, isError } = getLocation();
            
      console.log(location)
            
      

      // useEffect(()=>{

      //       const userLocationArr = useStoreState((state) => state.userLocation);
      
      //       console.log( userLocationArr);
      
      //       if (userLocationArr) {
                  
      //       console.log(userLocationArr);
                  
      //       };
            
      // }, [])

     

      // const locationArr = locationStore((state) => state.location);

      // console.log(locationArr)

      // const { data } = hotelsNearby('lagos,Nigeria');

      // if (data) {
      //       console.log(data.data.data)
      // }

      const sliderSettings = {
            dots: false,
            infinite: false,
            // slidesToShow: 4,
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
                        
                        <InputContainer sx={{width:"30vw"}}>
                              
                          <Image src={bed} height={'20px'} width={'20px'} />
                              
                        <StyledInput style={{width:"25vw"}} placeholder='Enter a city, hotel , airport, address or landmark' />

                        </InputContainer>


                        <InputContainer >
                             
                              <Image src={ calender} width={20} height={20}  />
                              {/* <StyledInput style={{ width: "10vw" }} /> */}
                              <DatePicker  />
                           
                              
                              <Divider orientation="vertical" sx={{ height: "25px", display: "flex", margin: "auto 10px" }} />

                             
                              <Image src={calender} width={'20px'} height={'20px'} />
                              {/* <StyledInput  style={{width:"10vw"}} /> */}
                              <DatePicker  />
                             
                              
                        </InputContainer> 
                        
      

                        {/* <InputContainer sx={{postioning:"relative"}}> */}
                              
                              {/* <Image src={profile} width={20} height={20}  /> */}
                              
                              <StyledInput sx={{position:"relative"}} />

                        {/* </InputContainer> */}
                        
                        

                        <SearchBox>
                              
                              <Image src={search} height='20' width='20'/>

                        </SearchBox>

                  </InputStack>

                  {/* {
                        userLocationArr.map((item) => {
                              return (
                                    <h1>{item}</h1>
                              )
                        })
                  } */}


                  <Box>
                        <Image src={hero} height={1000} placeholder='blur' loading='lazy' style={{borderRadius:'10px'}} />
                  </Box>

                  <Stack gap={'1em'}>
                        <Stack direction={'row'} sx={{ justifyContent: 'space-between'}}>
                              <Box>
                                    <Typography component={'h2'} variant='h2'>Stays in Lagos</Typography>
                                    <Typography component={'p'} variant='p'>Wed, Dec 7 - Thu, Dec 8</Typography>
                              </Box>

                              <RegularButton>See all</RegularButton>
                        </Stack>

                        {/* <StaysContainer> */}
                              
                              <Slider {...sliderSettings} slidesToShow='4'>

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


                  <Subscribe />
                  
                  <Stack gap={'1em'}>
                        
                        <Typography component={'h3'} variant='h3'>Top 8 popular cities</Typography>

                        <Slider  {...sliderSettings} slidesToShow={2} style={{gap:'1em'}}  >
                              <Stack>
                                    
                                    <Image src={vagas} height="350px" width='500px' style={{ borderRadius: "5px" }} />

                                    <Typography component={'h4'}  variant={'h4'}>Las Vagas , NV</Typography>
                                    <Typography >Starts from $79+</Typography>
                                    
                              </Stack>

                              <Stack>
                                    <Image src={mexico} height="350px" width='500px' style={{ borderRadius: "5px" }} />
                                    
                                    <Typography component={'h4'} variant={'h4'}> Cancún, Quintana Roo, Mexico</Typography>
                                    <Typography>Stays from $146+</Typography>
                              </Stack>

                              <Stack>
                                    <Image src={miami} height="350px" width='500px' style={{ borderRadius: "5px" }} />
                                    
                                    <Typography component={'h4'} variant={'h4'}> Miami , FL</Typography>
                                    <Typography>Stays from $146+</Typography>
                                    
                              </Stack>

                              <Stack>
                                    <Image src={honolulu} height="350px" width='500px' style={{ borderRadius: "5px" }} />
                                    
                                    <Typography component={'h4'} variant={'h4'}>Honolulu, O'ahu, HI</Typography>
                                    <Typography>Stays from $146+</Typography>                       

                              </Stack>

                              <Stack>
                                    <Image src={orlando} height="350px" width='500px' style={{ borderRadius: "5px" }} />
                                    
                                    <Typography component={'h4'} variant={'h4'}>Orlando, FL</Typography>
                                    <Typography>Stays from $71+</Typography>
                              </Stack>
                              
                              <Stack>
                                    <Image src={newyork} height="350px" width='500px' style={{ borderRadius: "5px" }} />
                                    
                                    <Typography component={'h4'} variant={'h4'}>New York, NY</Typography>
                                    <Typography>Stays from $89+</Typography>
                              </Stack>
                              
                              <Stack>
                                    <Image src={london} height="350px" width='500px' style={{ borderRadius: "5px" }} />
                                    
                                    <Typography component={'h4'} variant={'h4'}>London , England, United Kingdom</Typography>
                                    <Typography>Stays from $146+</Typography>
                              </Stack>
                              
                              <Stack>
                                    <Image src={chicago} height="350px" width='500px' style={{ borderRadius: "5px" }} />
                                    
                                    <Typography component={'h4'} variant={'h4'}>Chicago, IL</Typography>
                                    <Typography>Stays from $35+</Typography>
                              </Stack>

                        </Slider>
                        
                  </Stack>
                  
            </Container>
            
      )
}

export default Stays;