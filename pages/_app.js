import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// import axios from 'axios';

// import { useQuery } from '@tanstack/react-query';


import '../styles/globals.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Layout from '../layout/layout'


const queryClient = new QueryClient({});

function MyApp({ Component, pageProps }) {

 


  return (

    <QueryClientProvider client={queryClient}>
      
    <Layout>
      
       <Component {...pageProps} />

      </Layout>
      
      
    </QueryClientProvider>
    
  )
}

export default MyApp
