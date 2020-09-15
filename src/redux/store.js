/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Sep 15 2020 09:41:02 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rootReducer'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

// create redux
const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(logger, thunk),
))

export default store