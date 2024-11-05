import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <div className="flex flex-col items-center group space-y-6 py-4">

            <Link to="/"> 
                <h1 className="text-5xl lg:text-7xl tracking-tight font-bold lowercase mt-20">
                    Calcalooza
                </h1>
            </Link>

            <p className="w-2/3 lg:max-w-4xl text-sm lg:text-base text-center text-gray-600 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Welcome to <span className="italic">Calcalooza</span>, your go-to tool for mastering basic algebra and geometry concepts. 
                Bookmark us for quick access and explore our wide range of tools below.
            </p>

           
        </div>
    );
}

export default Header;
