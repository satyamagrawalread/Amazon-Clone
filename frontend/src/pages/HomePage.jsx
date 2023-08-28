import React from 'react'
import '../styles/homePage.css'

function HomePage() {
    return (
        <div className='home-page'>
            <h1>Home Page</h1>
            <div style={{width: '400px', background: 'red', display: 'none'}} className="parent">
                <div className="child-1">Hello My Friend</div>
            </div>
            

        </div>
    )
}

export default HomePage
