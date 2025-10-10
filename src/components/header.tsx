"use client";
import React from 'react'

export default function Header() {
    return (
        <div className="p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold tracking-wider">Patipan</div>

                <div className="hidden md:block">
                    <ul className="flex space-x-6">
                        {/* <li>
                            <a href="#home" className="hover:text-blue-400 transition duration-150">Home</a>
                        </li> */}
                        <li>
                            <a href="#about" className="hover:text-blue-400 transition duration-150">About Me</a>
                        </li>
                        <li>
                            <a href="#projects" className="hover:text-blue-400 transition duration-150">Projects</a>
                        </li>
                        <li>
                            <a href="#activity" className="hover:text-blue-400 transition duration-150">Activity</a>
                        </li>
                        <li>
                            <a href="#certificate" className="hover:text-blue-400 transition duration-150">Certificate</a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-blue-400 transition duration-150">Contact</a>
                        </li>
                    </ul>
                </div>

                <div className="md:hidden">
                    <button className="text-white focus:outline-none">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}
