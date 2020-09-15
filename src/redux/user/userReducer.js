/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Sep 15 2020 22:43:00 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from "./userTypes"

const initialState = {
    loading: false,
    users: [],
    err: ''
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
                err: ''
            }

        case FETCH_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                users: [],
                err: action.payload
            }

        default:
            return state
    }
}

export default userReducer
