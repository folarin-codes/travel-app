import Image from "next/image";

import { Stack, Box, Typography } from '@mui/material'

import { Container } from "../component/Container"


import Destinations from '../component/Destinations';

import { SearchBox } from '../component/Search';

import { InputStack , StyledInput , MainStack } from "./Stays";


import { RegularButton } from '../component/Button';


import search from '../images/search.svg';


import ride from '../images/ride.jpeg';


const CarRentals = () => {

      return (

            <Container>
                  
                  <Box>
                        
                        <Typography variant='h1' component={'h1'}>Where are you going?</Typography>

                  </Box>
                  
                  <InputStack>
                        
                        <StyledInput />
                        <StyledInput/>
                        <StyledInput />
                        
                        <StyledInput />
                        
                        
                        <SearchBox>
                              
                              <Image src={search} height='20' width='20'/>

                        </SearchBox>

                  </InputStack>

                  
                  <Box>
                        <Image src={ride} height={1000} placeholder='blur' loading='lazy' style={{borderRadius:'10px'}} />
                  </Box>

                  <MainStack>
                        
                        <Typography component={'h3'} variant='h3'>Your holiday travel guide</Typography>

                        <Stack direction="row" justifyContent={'space-between'} gap='5em'>
                              <Typography>Tools to get to your destination.</Typography>

                              <RegularButton>See all</RegularButton>
                        </Stack>

                        <Destinations/>

                      

                  </MainStack>


                  

            </Container>
            
      )
}

export default CarRentals;