/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Sep 15 2020 09:41:02 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import { createStore } from 'redux'
import rootReducer from './rootReducer'

// create redux
const store = createStore(rootReducer)

export default store