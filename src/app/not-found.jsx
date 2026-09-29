import Link from "next/link";
import React from 'react';
const NotFound = () => {
    return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center bg-[#0b0c0f] px-4 text-center">
            
            <h1 className="text-7xl font-extrabold text-lime-400">
                404
            </h1>

            <h2 className="mt-4 text-2xl font-bold text-white">
                PAGE NOT FOUND
            </h2>

            <p className="mt-2 max-w-md text-sm text-gray-500">
                The page you are looking for does not exist or may have been moved.
            </p>

            <Link
                href="/"
                className="mt-6 rounded-full bg-lime-400 px-6 py-3 text-sm font-semibold text-black hover:bg-lime-300"
            >
                Back to Home
            </Link>
        </div>
    );
};

export default NotFound;

