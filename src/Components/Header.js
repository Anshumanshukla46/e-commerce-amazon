import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import logo from "../Images/logo.png"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
    return (
        <nav className='header'>

            {/* logo left */}
            <Link to="/">
                <img className='header_logo'
                    src={logo} alt="logo" />
            </Link>

            {/* search box */}
            <div className="header_search">
                <input type="text" className="header_searchInput" />
                <SearchIcon className='header_searchIcon' />
            </div>


            {/* 4 links */}
            <div className="header_nav">
                {/* href will refresh the page but this link will not refresh the PAGE : SPA(SINGLE  APPLICATION) */}

                <Link to="/login" className='header_link'>

                    <div className="header_option">
                        <span className='header_optionLineOne'>Hello</span>
                        <span className='header_optionLineTwo'>Sign In</span>
                    </div>

                </Link>



                <Link to="/" className='header_link'>

                    <div className="header_option">
                        <span className='header_optionLineOne'>Returns</span>
                        <span className='header_optionLineTwo'>& Orders</span>
                    </div>

                </Link>



                <Link to="/" className='header_link'>

                    <div className="header_option">
                        <span className='header_optionLineOne'>Your</span>
                        <span className='header_optionLineTwo'>Prime</span>
                    </div>

                </Link>


                {/* checkout */}
                <Link to="/checkout" className='header_link'>
                    <div className="header_optionBasket">
                        {/* basket icon */}
                        <ShoppingBasketIcon />

                        {/* number of item in basket */}
                        <span className='header_optionLineTwo header_optionBasketCount'>0</span>

                    </div>
                </Link>

            </div>


            {/* basket icon (number icon) */}
        </nav>
    )
}

export default Header
