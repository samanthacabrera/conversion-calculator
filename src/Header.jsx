import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const backgroundColors = ['bg-lime-200', 'bg-orange-200', 'bg-sky-200'];

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

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl px-4">
                {['Basic Math', 'Algebra', 'Geometry'].map((concept, index) => (
                    <div 
                        key={index} 
                        className={`group relative w-full md:h-[200px] p-4 border border-black text-black transition-all duration-300 hover:bg-black hover:text-white hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] ${backgroundColors[index % backgroundColors.length]}`}
                    >
                        <Link to="/" className="w-full h-full flex flex-col justify-between items-start">
                            <h2 className="text-3xl font-bold tracking-tighter mb-3 group-hover:underline decoration-dotted decoration-2 underline-offset-4">
                                {concept}
                            </h2>
                            <p className="text-base font-mono opacity-80 group-hover:opacity-100">
                                {concept === 'Basic Math' && 'Learn foundational math concepts that are essential for further learning.'}
                                {concept === 'Algebra' && 'Explore algebraic concepts, including equations, slope, and distance calculations.'}
                                {concept === 'Geometry' && 'Dive into geometry concepts including volume, area, surface area, and perimeter calculations.'}
                            </p>
                        </Link>
                    </div>
                ))}
            </div>
            
        </div>
    );
}

export default Header;
