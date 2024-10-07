import React from "react";

const Header = () => {
    return (
        <div className="flex flex-col items-center group">
            <h1 className="text-4xl tracking-wide lowercase p-2 my-16 lg:my-2 lg:mt-20">
                Calcalooza
            </h1>
            <p className="text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
               Welcome to <span className="italic">Calcalooza</span>, your go-to site for effortless unit conversions. Bookmark us for quick access and explore our wide range of tools below.
            </p>
        </div>
    );
}

export default Header;
