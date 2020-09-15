/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Sep 15 2020 10:50:01 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'
import { buyHotDog } from '../redux'
import { connect } from 'react-redux'

function HotDogContainer(props) {
    return (
        <div>
            <h1>HotDog Container</h1>
            <h2>Number of HotDogs - {props.numOfHotDogs}</h2>
            <button onClick={props.buyHotDog}>Buy A HotDog</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numOfHotDogs: state.hotDog.numOfHotDogs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyHotDog: () => dispatch(buyHotDog())
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HotDogContainer)
