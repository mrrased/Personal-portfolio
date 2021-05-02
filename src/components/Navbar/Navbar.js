import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import {
    Link
  } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="menu-wrap">
            <input type="checkbox" className="toggler"/>
            <div className="hamburger">
                <div>

                </div>
            </div>
            <div className="menu">
                <div>
                    <div>
                        <ul>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/work">My Works</Link></li>
                            <li><Link to="/blog">Blogs</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><a href="https://drive.google.com/uc?export=download&id=1GyEtl5tsW84F4dy-JhwVz9Y-eCJIPlJn"><button className="button">
                            <FontAwesomeIcon className="arrow" icon={faArrowDown} /> {''}
                                Download Resume
                                </button>
                                </a>
                                </li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Navbar;