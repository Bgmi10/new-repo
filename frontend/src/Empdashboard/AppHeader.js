import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faBarsProgress, faMailBulk, faToggleOff, faUserCircle, faTimes, faToggleOn } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { toggleVisibility, selectLeftSideVisibility , toggleDarkTheme, selectDarkTheme} from '../utils1/slices/sidebarslice';
import { useAlert } from "react-alert";
import Taskpage from './Taskpage';
import { logout } from '../actions/userAction';  // Import logout action
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const AppHeader = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const isLeftSideVisible = useSelector(selectLeftSideVisibility);
  const isDarkTheme = useSelector(selectDarkTheme)
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [selectedContent, setSelectedContent] = useState("dashboard");
  const [toggle, settoggle] = useState(true)
  const history = useHistory()

  const handleToggleLeftSide = () => {
    dispatch(toggleVisibility());
  };

  const handledarkclick = () =>{
   dispatch(toggleDarkTheme())
   settoggle(!toggle)
  }

  const toggleUserDropdown = () => {
    setShowUserDropdown(!showUserDropdown);
  };

  const handleusers = () => {
    setSelectedContent("Tasks");
  };

  const handleDashboard = () => {
    setSelectedContent("dashboard");
  };

  const handlelogout = async () => {
    try {
      await dispatch(logout()); // Dispatch logout action
      alert.success('Logout successful!');
      
      // After successful logout, redirect to the login page
      history.push("/login");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };
  
  return (
    <div className={`border-b-1 shadow-md p-2 py-4 h-12   w-1/ ${isDarkTheme ? 'dark-theme' : ''}`}>
      <div className='flex justify-between items-center'>
        {/* Left side content - visible on desktop */}
        <div className='hidden md:flex'>
          <div className=''>
            <FontAwesomeIcon icon={faBars} className='text-gray-500 cursor-pointer mr-2' onClick={handleToggleLeftSide} />
          </div>
          <ol className='flex'>
            <li className={`mb-2 cursor-pointer ml-4 ${selectedContent === 'dashboard' ? 'text-gray-600' : 'text-gray-400'}`} onClick={handleDashboard}>Dashboard</li>
            <li className={`mb-2 cursor-pointer ml-4 ${selectedContent === 'Tasks' ? 'text-gray-600' : 'text-gray-400'}`} onClick={handleusers}>Tasks</li>
          </ol>
        </div>

        {/* Hamburger icon for mobile */}
        <div className='md:hidden '>
          <FontAwesomeIcon icon={faBars} className='text-gray-500 cursor-pointer mr-2' onClick={handleToggleLeftSide} />
        </div>
        
        {/* Right side content */}
        <div className='flex items-center '>
          <FontAwesomeIcon icon={faBell} className='text-gray-500 cursor-pointer mx-2 text-lg ' />
          <FontAwesomeIcon icon={faBarsProgress} className='text-gray-500 cursor-pointer mx-2 text-lg' />
          <FontAwesomeIcon icon={faMailBulk} className='text-gray-500 cursor-pointer mx-2 text-lg' />
          <FontAwesomeIcon icon={ toggle ? faToggleOff : faToggleOn}  className='text-gray-500 cursor-pointer mx-2 text-lg' onClick={handledarkclick} />
          {/* User Profile Dropdown */}
          <div className="relative">
            <FontAwesomeIcon icon={faUserCircle} className='text-gray-500 cursor-pointer mx-2 text-lg' onClick={toggleUserDropdown} />
            {showUserDropdown && (
              <ul className="absolute top-10 right-0 bg-white rounded-md shadow-lg">
                <li className="px-4 py-2 text-gray-800 cursor-pointer">Profile</li>
                <li className="px-4 py-2 text-gray-800 cursor-pointer">Settings</li>
                <li className="px-4 py-2 text-gray-800 cursor-pointer" onClick={handlelogout}>Logout</li>
              </ul>
            )}
          </div>
        </div>
        
        {/* Left side content - displayed on mobile when toggled */}
        {isLeftSideVisible && (
          <div className='fixed top-0 left-0 h-full bg-gray-200 z-50 w-60  transition-all duration-300 overflow-hidden'>
            <div className='flex justify-end'>
              <FontAwesomeIcon icon={faTimes} className='text-gray-500 cursor-pointer m-4 text-xl' onClick={handleToggleLeftSide} />
            </div>
            <ol className='flex flex-col mt-7 ml-4 text-lg text-gray-600'>
              <li className={`mb-2 cursor-pointer ${selectedContent === 'dashboard' ? 'text-gray-600' : 'text-gray-400'}`} onClick={handleDashboard}>Dashboard</li>
              <li className={`mb-2 cursor-pointer ${selectedContent === 'Tasks' ? 'text-gray-600' : 'text-gray-400'}`} onClick={handleusers}>Tasks</li>
            </ol>
          </div>
        )}
      </div>
      {selectedContent === 'Tasks' && <Taskpage />}
    </div>
  );
}

export default AppHeader;
