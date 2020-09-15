/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Sep 15 2020 10:03:08 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'

function HooksCakeContainer() {
    const numOfCakes = useSelector(state => state.numOfCakes)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Hooks Cake Container</h1>
            <h2>Number of cakes - {numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy A Cake</button>
        </div>
    )
}

export default HooksCakeContainer
