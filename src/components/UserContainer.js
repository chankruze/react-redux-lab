/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Sep 15 2020 22:26:06 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'
import User from './User'
import styles from '../assets/css/user.module.css'

function UserContainer(props) {
    const { userData, fetchUsers } = props

    React.useEffect(() => {
        fetchUsers()
    }, [])

    console.log(userData)

    return userData.loading
        ? (<h2>Fetcing Data...</h2>)
        : userData.err
            ? (<h2>{userData.err}</h2>)
            : (<table className={styles.table}>
                <tbody>
                    <tr>
                        <th>ID</th >
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>Company</th>
                    </tr >
                    {
                        userData
                        && userData.users
                        && userData.users.map(user => <User  key={user.id} data={user} />)
                    }
                </tbody>
            </table >)
}

const mapStateToProps = (state) => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
