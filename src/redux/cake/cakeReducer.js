/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Sep 15 2020 09:37:44 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import { BUY_CAKE } from "./cakeTypes"

const initialState = {
    numOfCakes: 10
}

const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }

        default:
            return state
    }
}

export default cakeReducer
