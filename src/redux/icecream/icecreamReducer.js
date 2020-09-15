/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Sep 15 2020 10:12:59 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import { BUY_ICECREAM } from './icecreamTypes'


const initialState = {
    numOfIceCreams: 20
}

const iceCreamReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            }

        default:
            return state
    }
}

export default iceCreamReducer