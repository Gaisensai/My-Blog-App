import React from 'react';
import './index.css';

const Navbar = () => {


    return (
        <nav className="navbar">
            <h1>myBlog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/new">New Blog</a>
            </div>

        </nav>        
    );
}
 
export default Navbar;