/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Sep 15 2020 09:41:02 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rootReducer'
import logger from 'redux-logger'

// create redux
const store = createStore(rootReducer, applyMiddleware(logger))

export default store