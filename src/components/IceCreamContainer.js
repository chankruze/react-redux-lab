/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Sep 15 2020 10:20:33 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'
import { buyIcecream } from '../redux'
import { connect } from 'react-redux'

function IceCreamContainer(props) {
    return (
        <div>
            <h1>Normal IceCream Container</h1>
            <h2>Number of Icecreams - {props.numOfIceCreams}</h2>
            <button onClick={props.buyIcecream}>Buy An IceCream</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyIcecream: () => dispatch(buyIcecream())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IceCreamContainer)
