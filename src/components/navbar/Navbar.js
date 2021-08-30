import React, { useState , useEffect } from 'react';
import { Search, Notifications, ArrowDropDown } from '@material-ui/icons';
import './navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return () => (window.onscroll = null);
    }



    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
           <div className="container">
               <div className="left">
                   <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="logo"/>
                   <Link to="/" className="link">
                   <span>Homepage</span>
                   </Link>
                   <Link to ="/series" className="link">
                   <span>Series</span>
                   </Link>
                   <Link to="/movies" className="link">
                   <span>Movies</span>
                   </Link>
                   <span>New and Popular</span>
                   <span>My List</span>
               </div>
               <div className="right">
                   <Search className="icon" />
                   <span>KID</span>
                   <Notifications className="icon"/>
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5tOEDX1L_GfNB8nIUqpYXwMmUu4lF-tTfwA&usqp=CAU" alt="profile"/>
                   <div className="profile">
                    <ArrowDropDown className="icon"/>
                    <div className="options">
                        <span>Setting</span>
                        <span>Log out</span>
                    </div>
                   </div>
               </div>

           </div>
        </div>
    )
}

export default Navbar
