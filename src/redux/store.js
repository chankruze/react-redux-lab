/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Sep 15 2020 09:41:02 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import { createStore } from 'redux'
import cakeReducer from './cake/cakeReducer'

// create redux store
const store = createStore(cakeReducer)

export default store