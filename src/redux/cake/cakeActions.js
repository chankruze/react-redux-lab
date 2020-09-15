/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Sep 15 2020 09:34:31 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import { BUY_CAKE } from "./cakeTypes"

export const buyCake = (number = 1) => {
    return {
        type: BUY_CAKE,
        payload: number
    }
}