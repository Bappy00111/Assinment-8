import React from 'react';
import logo from '../../images/IMG_20231119_103401.jpg'

const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-3xl">Knowledge Cafe</a>
            </div>
            <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <img src={logo} alt="" />
                        </div>                      
                    </label>
                </div>
            </div>
        </div>
        
    )
};

export default Header;