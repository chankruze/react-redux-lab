/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Sep 15 2020 21:33:42 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'
import { buyCake } from '../redux'
import { connect } from 'react-redux'

function NewCakeContainer(props) {
    const [number, setNumber] = React.useState(1)

    return (
        <div>
            <h1>New Cake Container</h1>
            <h2>Number of cakes - {props.numOfCakes}</h2>
            <input type="number" value={number} onChange={e => setNumber(e.target.value)}/>
            <button onClick={() => props.buyCake(number)}>Buy {number} Cakes</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: (number) => dispatch(buyCake(number))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewCakeContainer)
