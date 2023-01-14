import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { StoreProvider } from 'easy-peasy';

import { store } from '../store/store';

import '../styles/globals.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Layout from '../layout/layout'


const queryClient = new QueryClient({});

function MyApp({ Component, pageProps }) {

 


  return (

    <StoreProvider store={store}>

        <QueryClientProvider client={queryClient}>
          
          <Layout>
                
            <Component {...pageProps} />

          </Layout>
       </QueryClientProvider>
          
      </StoreProvider>
    
  )
}

export default MyApp
