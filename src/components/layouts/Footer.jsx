import React from 'react';
import logo from "../../assets/logo.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import footerimg from "../../assets/footerimg.png";

const linkColumns = [
    {
        title: "Shop",
        links: ["Coffee", "Tea", "Accessories", "Gifts"]
    },
     {
        title: "Company",
        links: ["About Us", "Careers", "Blog", "Contact"]
    },
    {
        title: "Support",
        links: ["FAQ", "Shipping", "Returns", "Privacy Policy"]
    }
];
const Footer = () => {
    return (
        <footer className="bg-black bg-opacity-90 text-white pt-10">
             <div
                className="rounded-3xl overflow-hidden mx-auto mb-10"
                style={{
                    padding: "40px",
                    maxWidth: "1200px",
                    backgroundImage: `url(${footerimg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >
                 <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
<img src={logo} alt="Logo" className="w-32 mb-4" />
<p className="mb-4 text-white/80">
The best coffee shop in town. Fresh beans, cozy vibes, and friendly faces.
</p>
<div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <img src={facebook} alt="Facebook" className="w-6 h-6" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <img src={twitter} alt="Twitter" className="w-6 h-6" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <img src={instagram} alt="Instagram" className="w-6 h-6" />
                            </a>
                        </div>
                         </div>
                    {/* Other Columns: Links */}
                    {linkColumns.map((col) => (
                        <div key={col.title}>
                            <h3 className="font-bold mb-4 text-lg">{col.title}</h3>
                            <ul className="space-y-2">
                                {col.links.map(link => (
                                    <li key={link}>
                                        <a href="#" className="hover:underline text-white/80">{link}</a>
                                    </li>
                                ))}
                                </ul>
                        </div>
                    ))}
                    </div>
            </div>
            <div className="border-t border-white/30 py-[15px] px-8 flex flex-col md:flex-row items-center justify-between">
                <span className="text-white/70 text-sm">&copy; {new Date().getFullYear()} Coffee Shop. All rights reserved.</span>
                <div className="flex space-x-6 mt-2 md:mt-0">
                    <a href="#" className="hover:underline text-white/80">Terms</a>
                    <a href="#" className="hover:underline text-white/80">Privacy</a>
                    <a href="#" className="hover:underline text-white/80">Sitemap</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;