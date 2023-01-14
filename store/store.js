
import { createStore, action, thunk } from 'easy-peasy';

import { create } from 'zustand';


export const store = createStore({

      userLocation: [] ,

      addUserLocation: action((state, payload) => {

            console.log(payload);
           
            // state.userLocation.push(payload);

            state.userLocation = payload;

      }),
      getUserLocation: thunk(async (actions, payload) => {
            // const { data } = getLocation();

            // console.log(data)

            
            actions.addUserLocation([payload]);
            
      })
})



export const locationStore = create((set) =>( {
      location: [],
      getUserLocation: (location) => set((state) => ({
            ...state , location
            
      }))
}))