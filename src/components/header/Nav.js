"use client"
import React from 'react'
import Link from 'next/link';
import { ReactSVG } from 'react-svg';
function Nav() {
    return (
        <div>
            <div className="nav-area">
                <nav>
                    <ul>
                        <li>
                            <Link className="nav-link" href="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" href="/service">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" href="/about">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" href="/case-studies">
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" href="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Nav