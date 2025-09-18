import React, { useContext, useState } from 'react';
import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import cart from "../../assets/cart.png";
import { NavLink } from 'react-router';
import { DataContext } from '../../contextApi/contextApi';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase.config';

const Header = () => {
    const [loading, setLoading] = useState(false);
    const { userData } = useContext(DataContext);
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Shop", path: "/shop" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
    ];

    const handleLogout = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                console.log("User logged out successfully");
                setLoading(false);
            })
            .catch((error) => {
                console.log("Error during logout:", error.message);
                setLoading(false);
            });
    };

    // Optional: Remove this log in production
    // if (userData) {
    //     console.log("User is logged in:", userData);
    // }

    return (
        <header>
            <nav className="shadow-lg flex items-center justify-between p-4">
                {/* Left: Navigation */}
                <ul className="flex space-x-4 flex-1">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <NavLink
                                to={link.path}
                                className="text-[#1E1E1E] hover:text-[#EF2E48]"
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Center: Logo */}
                <div className="flex-1 flex justify-center">
                    <img src={logo} alt="coffee shop logo" className="w-[150px] h-[80px]" />
                </div>

                {/* Right: Login/Logout, Search, Cart */}
                <div className="flex-1 flex justify-end items-center space-x-4">
                    {userData ? (
                        <button
                        type= "button"
                            onClick={handleLogout}
                            className="text-[#1E1E1E] hover:text-[#EF2E48] text-lg cursor-pointer"
                        >
                            Logout, {userData.displayName}
                        </button>
                    ) : (
                        <NavLink
                            to="/profile"
                            className="text-[#1E1E1E] hover:text-[#EF2E48] text-lg"
                        >
                            Login/Signup
                        </NavLink>
                    )}

                    <button className="cursor-pointer">
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