/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Sep 15 2020 10:46:40 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import { BUY_HOTDOG } from './hotDogTypes'

const initialState = {
    numOfHotDogs: 25
}

const hotDogReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_HOTDOG:
            return {
                ...state,
                numOfHotDogs: state.numOfHotDogs - 1
            }

        default:
            return state
    }
}

export default hotDogReducer