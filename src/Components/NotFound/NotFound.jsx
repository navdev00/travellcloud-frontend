import React from 'react'
import { Link } from 'react-router-dom'
import "../NotFound/NotFound.css"

const NotFound = () => {
    return (
        <div className='Notfound'>
            <div className="notfoundcontainer">
                <h1>Page Not Found</h1>
                <Link to="/">Back to Home</Link>

            </div>
            

        </div>
    )
}

export default NotFound