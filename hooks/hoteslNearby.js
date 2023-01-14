import { useQuery } from "@tanstack/react-query";
import axios from "axios";


export const hotelsNearby = (location) => {
      return useQuery(['hotelsNearby'], async () => {
            const response = await axios.get(`https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchLocation?query=${location}`, {
                  headers: {"X-RapidAPI-Key":"05f1179be4mshfdce8c5340638d0p1a85f3jsn97608f89afcf"
                  }
            })
            
            return response;
      })
}
