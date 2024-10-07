import React from "react";

const Header = () => {
    return (
        <div className="flex flex-col items-center group space-y-2 py-4">
            <h1 className="text-5xl lg:text-7xl tracking-wide lowercase mt-20">
                Calcalooza
            </h1>
            <p className="w-2/3 lg:w-full text-xs lg:text-base text-center text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
               Welcome to <span className="italic">Calcalooza</span>, your go-to site for effortless unit conversions. Bookmark us for quick access and explore our wide range of tools below.
            </p>
        </div>
    );
}

export default Header;
