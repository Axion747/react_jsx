import { useState } from 'react'

// functional component that returns a header for the top of a webpage with basic navigation links
const Header = () => {
    return (
        <div className="fixed top-0 h-16 w-full m-0 p-0
        flex flex-row bg-gray-900 text-white shadow-slate-800">

        </div>  
    )
};

// react component for sidebar icons, taking in icon component as a prop and export a div with the icon component
const SideBarIcon = ({ icon }) => {
    return (
        <div className="">
            {icon}
        </div>
    )
};



export default Header;