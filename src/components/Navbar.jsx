'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import logo from '@/app/assets/logo.png';
import { planContext } from '@/context/planProvider';

const Navbar = () => {
    
      const {todaysPlan ,savedPlan } = useContext(planContext)
      
    const links = (
        <>
            <li>
                <Link href="/"
                    className="rounded-full bg-lime-400 px-4 py-2 text-[11px] font-bold text-black hover:bg-lime-300">
                    Workouts
                </Link>
            </li>

            <li>
                <Link
                    href="/my-plan"
                    className="px-3 py-2 text-[11px] font-medium text-gray-400 hover:text-white">
                    My Plan
                </Link>
            </li>
        </>
    );

    return (
        <div className="border-b border-white/10 bg-[#0b0c0f]">
            <div className="navbar mx-auto min-h-[64px] max-w-7xl px-4 lg:px-0">

              
                <div className="navbar-start">

                
                    <div className="dropdown lg:hidden">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-sm mr-2 p-1 text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </div>

                        <ul
                            tabIndex={-1}
                            className="menu dropdown-content z-50 mt-3 w-44 rounded-xl border border-white/10 bg-[#15161b] p-2 shadow-xl"
                        >
                            {links}
                        </ul>
                    </div>

                 
                    <Link
                        href="/"
                        className="flex items-center gap-2"
                    >
                        <Image
                            src={logo}
                            alt="FITLOG Logo"
                            width={20}
                            height={20}
                        />

                        <span className="text-sm font-extrabold tracking-wide text-white">
                            FITLOG
                        </span>
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal items-center gap-1 p-0">
                        {links}
                    </ul>
                </div>

                <div className="navbar-end gap-5">

                    <Link
                        href="/my-plan"
                        className="flex items-center gap-1.5 text-[11px] font-medium text-gray-400 transition hover:text-white"
                    >
                        <span>Plan</span>

                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-lime-400 text-[9px] font-bold text-black">
                            {todaysPlan.length}
                        </span>
                    </Link>

                    <Link
                        href="/my-plan"
                        className="flex items-center gap-1.5 text-[11px] font-medium text-gray-400 transition hover:text-white"
                    >
                        <span>Saved</span>

                        <span className="flex h-4 w-4 items-center justify-center rounded-full border border-white/20 text-[9px] text-gray-400">
                            {savedPlan.length}
                        </span>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Navbar;