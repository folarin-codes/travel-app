
import Image from 'next/image';

import { useQuery } from '@tanstack/react-query';

import { Box, Stack, Typography } from '@mui/material'

import { Container } from "../component/Container"

import { getLocation } from '../hooks/userLocation';
import Destinations from '../component/Destinations';

import Subscribe from '../component/Subscribe';

import { SearchBox } from '../component/Search';

import { InputStack , StyledInput , MainStack } from "./Stays";


import { RegularButton } from '../component/Button';
 

import search from '../images/search.svg';

const Flights = () => {

      // const { data } = useQuery('location');

      const {data} = getLocation()

      console.log(data)

      

      return (

            <Container>

                  <Box>
                        
                        <Typography variant='h1' component={'h1'}>Where are you flying?</Typography>

                 </Box>

                 <InputStack>
                  <StyledInput/>

                  <Stack sx={{backgroundColor:"#e5ebf0" , borderRadius:'5px' , width:'50px'}}>

    
                  <Box sx={{justifyItems:'center' , justifySelf:'center'}}>

               
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" class="c-P_--icon c-P_--mod-responsive" role="img" cleanup=""><path d="M56.238 154.801c-25.271-30.326-30.335-33.201-25-39.603l25-30l11.523 9.603L53.013 112.5H120v15H53.013l14.749 17.699l-11.524 9.602zm86.524-40l-11.523-9.603L145.987 87.5H80v-15h65.987l-14.749-17.699l11.523-9.603l25 30c5.335 6.403.272 9.278-24.999 39.603z"></path></svg>
                  </Box>

                  <Box>
                        
                  </Box>

              
                  

                  </Stack>
                  <StyledInput/>
                  <StyledInput/>
                  <StyledInput/>
               

                  <SearchBox>
                              
                              <Image src={search} height='20' width='20'/>

                        </SearchBox>
                 </InputStack>

                 <Stack>

                 <Stack direction={'row'} sx={{ justifyContent: 'space-between'}}>
                              <Box>
                                    <Typography component={'h4'} variant='h4'>Explore the world from Lagos</Typography>
                                    <Typography component={'p'} variant='p'>Find flights from where you are with a botton click</Typography>
                              </Box>

                              <RegularButton>See all</RegularButton>

                        </Stack>

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

export default Flights;