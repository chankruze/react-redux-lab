/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Sep 15 2020 21:45:56 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'
import { connect } from 'react-redux'

function ItemContainer(props) {
    return (
        <div>
            <h2>Num of {props.item}s - {props.count}</h2>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    if (ownProps.cake) {
        return {
            item: 'Cake',
            count: state.cake.numOfCakes
        }
    } else {
        return {
            item: 'IceCream',
            count: state.iceCream.numOfIceCreams
        }
    }
}

export default connect(mapStateToProps)(ItemContainer)
