/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Sep 15 2020 22:26:47 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'

function User(props) {
    const { id,
        name,
        username,
        email,
        address,
        phone,
        website,
        company
    } = props.data

    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>
                <b>street:</b> {address.street}<br />
                <b>suite:</b> {address.suite}<br />
                <b>city:</b> {address.city}<br />
                <b>zipcode:</b> {address.zipcode}<br />
                <b>lat:</b> {address.geo.lat}<br />
                <b>lng:</b> {address.geo.lng}<br />
            </td>
            <td>{phone.split(' ')[0]}</td>
            <td>{website}</td>
            <td>
                <b>name:</b> {company.name}<br />
                <b>catchPhrase:</b> {company.catchPhrase}<br />
                <b>bs:</b> {company.bs}<br />
            </td>
        </tr>
    )
}

export default User
