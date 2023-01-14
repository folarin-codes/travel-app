import axios from "axios";

import { useStoreActions } from 'easy-peasy';

import { useQuery } from "@tanstack/react-query";

export const getLocation = () => {

      return useQuery(['location'] ,  async () => {
               const response = await axios.get("http://ip-api.com/json")
              
            //     console.log(response.data)
      
                return response;
            
      } )
}



