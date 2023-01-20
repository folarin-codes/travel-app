import { useMemo } from 'react';

import { createStore, action, thunk , persist} from 'easy-peasy';

import { create } from 'zustand';


let store;

const initialState = {
      userLocation : [],
}

const userLocationModel = {

      ...initialState.userLocation,

      getUserLocation: action((state, payload) => {
            state.userLocation.push(payload);
      })
}


const storeModel = {
      userLocation : userLocationModel 
}

function initStore(preloadedState = initialState) {
      return createStore(
            persist(
                  
            storeModel

            ),
            { initialState: preloadedState }
      )
}

export const initializeStore = (preloadedState) => {
      let _store = store ?? initStore(preloadedState)
  
      // After navigating to a page with an initial Redux state, merge that state
      // with the current state in the store, and create a new store
      if (preloadedState && store) {
          _store = initStore({
              ...store.getState(),
              ...preloadedState,
          })
          // Reset the current store
          store = undefined
      }
  
      // For SSG and SSR always create a new store
      if (typeof window === 'undefined') return _store
      // Create the store once in the client
      if (!store) store = _store
  
      return _store
  }
  
  export function useStore(initialState) {
      const store = useMemo(() => initializeStore(initialState), [initialState])
      return store
  }


// export const store = createStore({

//       userLocation: [] ,

//       addUserLocation: action((state, payload) => {

//             console.log(payload);
           
//             state.userLocation.push({ data: payload });

//             // state.userLocation = payload;

//       }),
//       getUserLocation: thunk(async (actions, payload) => {
//             // const { data } = getLocation();

//             // console.log(data)

            
//             actions.addUserLocation([payload]);
            
//       })
// })



export const locationStore = create((set) =>( {
      location: [],
      getUserLocation: (location) => set((state) => ({
            ...state , location
            
      }))
}))