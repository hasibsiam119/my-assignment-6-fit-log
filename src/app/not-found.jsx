import Link from "next/link";
import React from 'react';

const NotFound = () => {
    return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center bg-[#0b0c0f] px-4 text-center">

            <h1 className="text-6xl font-extrabold text-lime-400 sm:text-7xl">
                404
            </h1>

            <h2 className="mt-4 text-xl font-bold text-white sm:text-2xl">
                PAGE NOT FOUND
            </h2>

            <p className="mt-2 max-w-[320px] text-sm text-gray-500 sm:max-w-md">
                The page you are looking for does not exist or may have been moved.
            </p>

            <Link
                href="/"
                className="mt-6 rounded-full bg-lime-400 px-5 py-2.5 text-sm font-semibold text-black hover:bg-lime-300 sm:px-6 sm:py-3"
            >
                Back to Home
            </Link>
        </div>
    );
};

export default NotFound;
