import { Stack , Typography , Link, Box} from "@mui/material";

import styled from '@emotion/styled'

import theme from '../theme';


const FooterStack = styled(Stack)(({ theme }) => ({

      
      margin: '0 0 0 15vw',
      backgroundColor: '#212a30',
      color: 'white',
      flexDirection: 'column',
      padding: "4em 2em",
      gap:'2em'
    
      
}))

const MainStack = styled(Stack)(({ theme }) => ({
      flexDirection:'row',
      justifyContent: 'space-between',
}))

const FooterText = styled(Typography)({
      color: "white !important",
      marginBottom:"1em"

})

const LinkText = styled(Link)(({
      color:'white !important'
}))

const Footer = () => {
      return (
            <FooterStack>
                  <MainStack>

               
                  
                  <Stack gap='.5em'>
                        <FooterText variant='h4' component='h4'>Company</FooterText>

                        <LinkText>About</LinkText>
                        
                        <LinkText>Careers</LinkText>
                        <LinkText>Mobile</LinkText>
                        <LinkText>Blog</LinkText>
                        <LinkText>How we work</LinkText>


                  </Stack>
                  
                  <Stack gap='.5em'>
                        <FooterText>Contact</FooterText>

                        
                        <LinkText>Help/FAQ</LinkText>
                        
                        <LinkText>Press</LinkText>
                        <LinkText>Affilaites</LinkText>
                        <LinkText>Hotel Owners</LinkText>
                        <LinkText>Partners</LinkText>
                        <LinkText>Advertise with us</LinkText>
                        
                  </Stack>

                  <Stack gap='.5em'>
                        
                  <FooterText>More</FooterText>
                    
                  <LinkText>Airline Fees</LinkText>
                  <LinkText>Airlines</LinkText>
                  <LinkText>Low fare tips</LinkText>
                  <LinkText>Badges & Certificates</LinkText>
                        
                  </Stack>

                  <Stack gap='.5em'>
                        
                  <FooterText>Site/Currency</FooterText>
              
                  <LinkText>Help/FAQ</LinkText>

                  <LinkText>Press</LinkText>
                  <LinkText>Affilaites</LinkText>
                  <LinkText>Hotel Owners</LinkText>
                  <LinkText>Partners</LinkText>
                  <LinkText>Advertise with us</LinkText>
                        
                  </Stack>
                  </MainStack>

                  <Stack justifyContent={'center'}>
                        <Stack flexDirection={'row'} gap='.5em'>
                              <Link>Privacy</Link>
                              <Link>Terms & Conditions</Link>
                              <Link>Ad Choices</Link>
                              <Typography>©2023 KAYAK</Typography>

                        </Stack>

                        <Box>
                              <Typography>Find train deals and discounts with KAYAK. KAYAK is a train fare tool that searches rail deal sites to help you find the train tickets that suit you best.</Typography>

                              <Typography>KAYAK also helps you find the right hotels for your needs.</Typography>

                        </Box>

                  </Stack>

            </FooterStack>
      )
}

export default Footer;