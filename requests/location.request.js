

import useSWR from 'swr'

const fetcher =  (url) => {

      fetch(url).then(res => res.json())
     
     
}

export default function getLocation() {

      const { data, error, isLoading } = useSWR("http://ip-api.com/json" , fetcher)

      return {
        user: data,
        isLoading,
        isError: error
      }
      
}