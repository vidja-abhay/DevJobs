import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <h1>
                    © <Link to="https://vidja-abhay.github.io/portfolio/">Abhay Vidja</Link>. All rights reserved
                </h1>
            </div>
        </footer>
    )
}

export default Footer
