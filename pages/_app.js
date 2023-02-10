import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import useSWR from 'swr'; 

import { StoreProvider } from 'easy-peasy';

import { store } from '../store/store';

import {fetcher} from '../hooks/userLocation'

import '../styles/globals.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../public/DatePicker.css';
import '../public/Calendar.css';

import Layout from '../layout/layout'


const queryClient = new QueryClient({});

function MyApp({ Component, pageProps }) {

  
  // const { data, error, isLoading } = useSWR('location', fetcher())

  // console.log(data , error , isLoading)

  // if (data) {
    

  //   console.log(data)
    
  // }

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
