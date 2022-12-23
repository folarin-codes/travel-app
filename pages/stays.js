import Image from 'next/image'

import { Stack, Box, Typography } from '@mui/material';

import styled from '@emotion/styled'


import { RegularButton } from '../component/Button';

import { Container } from '../component/Container';

import Subscribe from '../component/Subscribe';

import { SearchBox } from '../component/Search';

import Destinations from '../component/Destinations';

import search from '../images/search.svg';

import hero from '../images/hero.jpeg';


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


const SubscribeBox = styled(Stack)(({ theme }) => ({

      
}))


const Stays = () => {
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
                                    <Typography component={'h4'} variant='h4'>Stays in Lagos</Typography>
                                    <Typography component={'p'} variant='p'>Wed, Dec 7 - Thu, Dec 8</Typography>
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

export default Stays;