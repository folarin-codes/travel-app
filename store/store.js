
import { compose, createStore, applyMiddleWare } from 'redux';


import logger from 'redux-logger'

import { rootReducer } from './root-reducer';

export const store = createStore(rootReducer , undefined , logger )