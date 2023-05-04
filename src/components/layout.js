import React from 'react'
import Navbar from './navbar'

export default function Layout({children}) {

    const containerStyle = {
        width: '90px',
        margin: '100px '
    }

    return (
        <div >
            <Navbar/>
            <div style={containerStyle}>{children}</div>
        </div>
    )
}
