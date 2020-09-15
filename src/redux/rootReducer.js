/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Sep 15 2020 10:17:47 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import { combineReducers } from 'redux'
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

export default rootReducer