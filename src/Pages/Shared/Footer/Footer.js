import React from "react";
import logo3 from '../../../images/logo/sell-phone-03.png'
import {
    FaFacebookSquare,
    FaTwitterSquare,
    FaYoutubeSquare,
    FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-gray-600 py-6 px-2">
            <div className="sm:flex items-center">
                <img className="sm:w-56" src={logo3} alt="" />
                <div className="sm:flex-1">
                    <div className="flex gap-6 justify-center text-gray-300">
                        <div>
                            <Link><p className="hover:text-[#F45510]">About Us</p></Link>
                            <Link><p className="hover:text-[#F45510]">Contact Us</p></Link>
                        </div>
                        <div>
                            <Link><p className="hover:text-[#F45510]">Services</p></Link>
                            <Link><p className="hover:text-[#F45510]">Contact Us</p></Link>
                        </div>
                        <div>
                            <Link><p className="hover:text-[#F45510]">About Us</p></Link>
                            <Link><p className="hover:text-[#F45510]">Contact Us</p></Link>
                        </div>
                    </div>
                </div>

            </div>
            <hr className="my-5" />
            <div>
                <div className="flex justify-center gap-8 mb-4">
                    <a href="https://www.facebook.com/">
                        <FaFacebookSquare className="text-white text-2xl" />
                    </a>
                    <a href="https://twitter.com/">
                        <FaTwitterSquare className="text-white text-2xl" />
                    </a>
                    <a href="https://www.youtube.com/">
                        <FaYoutubeSquare className="text-white text-2xl" />
                    </a>
                    <a href="https://www.linkedin.com/">
                        <FaLinkedin className="text-white text-2xl" />
                    </a>
                </div>
                <p className="text-center font-medium text-white">
                    Copyright @2022 || All rights are reserved by the Sell Phone.
                </p>
            </div>
        </div>
    );
};

export default Footer;