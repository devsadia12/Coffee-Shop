import React from 'react';
import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import cart from "../../assets/cart.png";
import { NavLink } from 'react-router';

const Header = () => {
    const navLinks = [
        {name: "Home", path: "/"},
        {name: "Shop", path: "/shop"},
        {name: "About", path: "/about"},
        {name: "Contact", path: "/contact"},
    ]
    return (
        <header>
            <nav className="shadow-lg flex items-center justify-between p-4">
                <ul className="flex space-x-4 flex-1">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <NavLink
                            to={link.path}
                            className="text-[#1E1E1E] hover:text-[#EF2E48]">
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div className="flex-1 flex justify-center">
                    <img src={logo} alt="coffee shop logo" className="w-[150px] h-[80px]" />
                </div>
                <div className="flex-1 flex justify-end items-center space-x-4">
                    <NavLink to="/profile" className="text-[#1E1E1E] hover:text-[#EF2E48] text-lg">
                        Login
                    </NavLink>
                    <NavLink to="/register" className="text-[#1E1E1E] hover:text-[#EF2E48] text-lg">
                        Signup
                    </NavLink>
< button className="cursor-pointer">
<img src={search} alt="Search" />
</button>
<button className="cursor-pointer">
   <img src={cart} alt="cart" />
</button>
</div>
            </nav>
        </header>
    );
};

export default Header;