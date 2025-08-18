import React, { useState } from 'react';
// Icons ke liye 'react-icons' library se components import kiye gaye hain.
import { FaBars, FaBell, FaUserCircle, FaAngleDown, FaTachometerAlt, FaFileAlt, FaBook, FaCog, FaLock, FaImage, FaSignOutAlt, FaPlusSquare, FaEnvelopeOpenText, FaUserPlus, FaUserEdit } from 'react-icons/fa';

const Header = () => {
    // Dropdown state management
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isManuscriptMenuOpen, setIsManuscriptMenuOpen] = useState(false);
    const [isSettingsMenuOpen, setIsSettingsMenuOpen] = useState(false);

    // Dropdown menu toggle functions
    const toggleUserMenu = () => {
        setIsUserMenuOpen(!isUserMenuOpen);
        setIsManuscriptMenuOpen(false);
        setIsSettingsMenuOpen(false);
    };

    const toggleManuscriptMenu = () => {
        setIsManuscriptMenuOpen(!isManuscriptMenuOpen);
        setIsUserMenuOpen(false);
        setIsSettingsMenuOpen(false);
    };
    
    const toggleSettingsMenu = () => {
        setIsSettingsMenuOpen(!isSettingsMenuOpen);
        setIsUserMenuOpen(false);
        setIsManuscriptMenuOpen(false);
    };

    // Behtar code ke liye styles ko objects mein define kiya gaya hai.
    const headerStyle = {
        fontFamily: 'Arial, sans-serif',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        position: 'relative',
        zIndex: 1000,
    };

    const topBarStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 25px',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e0e0e0',
    };

    const topLeftStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
    };

    const logoStyle = {
        fontSize: '2.2rem',
        fontWeight: 'bold',
        color: '#333',
        margin: 0,
    };
    
    const logoPurpleStyle = {
        color: '#9c27b0', // Purple color for 'AP'
    };

    const topRightStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '25px',
    };
    
    const userProfileStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        cursor: 'pointer',
        color: '#555',
        position: 'relative', // for dropdown positioning
    };

    const userIconContainer = {
        position: 'relative',
    };

    const onlineIndicator = {
        position: 'absolute',
        bottom: '3px',
        right: '2px',
        width: '10px',
        height: '10px',
        backgroundColor: '#28a745', // Green color
        borderRadius: '50%',
        border: '2px solid white',
    };

    const navBarStyle = {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#34495e', // Dark teal/blue color
        color: 'white',
        padding: '0 25px',
        gap: '35px',
    };
    
    const navLinkStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        color: 'white',
        textDecoration: 'none',
        fontSize: '1rem',
        padding: '15px 0',
        cursor: 'pointer',
        borderBottom: '3px solid transparent',
        position: 'relative', // for dropdown positioning
    };

    const activeNavLinkStyle = {
        ...navLinkStyle,
        borderBottom: '3px solid #9c27b0', // Purple accent for active tab
        color: '#ffffff',
    };
    
    const dropdownMenuStyle = {
        position: 'absolute',
        top: '100%',
        left: '0',
        backgroundColor: '#34495e',
        color: 'white',
        minWidth: '220px',
        boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
        padding: '10px 0',
        borderRadius: '0 0 5px 5px',
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
    };

    const dropdownItemStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '12px 20px',
        cursor: 'pointer',
        textDecoration: 'none',
        color: 'white',
        transition: 'background-color 0.3s',
    };
    
    const userDropdownStyle = {
        ...dropdownMenuStyle,
        right: '0',
        left: 'auto',
        backgroundColor: '#ffffff',
        color: '#555',
    };

    const userDropdownItemStyle = {
        ...dropdownItemStyle,
        color: '#555',
        borderBottom: '1px solid #eee',
    };

    const logoutStyle = {
        ...userDropdownItemStyle,
        borderBottom: 'none',
        paddingTop: '15px',
        marginTop: '10px',
        borderTop: '1px solid #ccc',
    };

    return (
        <header style={headerStyle}>
            {/* Upper Navigation Bar */}
            <div style={topBarStyle}>
                <div style={topLeftStyle}>
                    <FaBars size={24} style={{ cursor: 'pointer', color: '#555' }} />
                    <h1 style={logoStyle}>J<span style={logoPurpleStyle}>AP</span>S</h1>
                </div>
                <div style={topRightStyle}>
                    <FaBell size={22} style={{ cursor: 'pointer', color: '#555' }} />
                    <div style={userProfileStyle} onClick={toggleUserMenu}>
                        <div style={userIconContainer}>
                            <FaUserCircle size={36} color="#cccccc" />
                            <span style={onlineIndicator}></span>
                        </div>
                        <FaAngleDown />
                        {/* User Dropdown Menu */}
                        {isUserMenuOpen && (
                            <div style={userDropdownStyle}>
                                <a href="#profile" style={userDropdownItemStyle}>
                                    <FaUserCircle size={18} /> Profile
                                </a>
                                <a href="#change-password" style={userDropdownItemStyle}>
                                    <FaLock size={18} /> Change Password
                                </a>
                                <a href="#change-picture" style={userDropdownItemStyle}>
                                    <FaImage size={18} /> Change Picture
                                </a>
                                <a href="#logout" style={logoutStyle}>
                                    <FaSignOutAlt size={18} /> Logout
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Lower Navigation Bar */}
            <nav style={navBarStyle}>
                <a href="#dashboard" style={activeNavLinkStyle}>
                    <FaTachometerAlt />
                    <span>Dashboard</span>
                </a>
                <div onClick={toggleManuscriptMenu} style={navLinkStyle}>
                    <FaFileAlt />
                    <span>Manuscript Management</span>
                    <FaAngleDown size={14} />
                    {/* Manuscript Dropdown Menu */}
                    {isManuscriptMenuOpen && (
                        <div style={dropdownMenuStyle}>
                            <a href="#submit" style={dropdownItemStyle}>
                                <FaPlusSquare /> Submit a new manuscript
                            </a>
                            <a href="#invoice" style={dropdownItemStyle}>
                                <FaFileAlt /> Manuscript Invoice
                            </a>
                            <a href="#acceptance" style={dropdownItemStyle}>
                                <FaEnvelopeOpenText /> Acceptance Letter
                            </a>
                            <a href="#reviewer" style={dropdownItemStyle}>
                                <FaUserPlus /> Become a Reviewer
                            </a>
                        </div>
                    )}
                </div>
                <a href="#guidelines" style={navLinkStyle}>
                    <FaBook />
                    <span>Guidelines</span>
                </a>
                <div onClick={toggleSettingsMenu} style={navLinkStyle}>
                    <FaCog />
                    <span>Settings</span>
                    <FaAngleDown size={14} />
                    {/* Settings Dropdown Menu */}
                    {isSettingsMenuOpen && (
                        <div style={dropdownMenuStyle}>
                            <a href="#change-password" style={dropdownItemStyle}>
                                <FaLock /> Change Password
                            </a>
                            <a href="#upload-picture" style={dropdownItemStyle}>
                                <FaImage /> Upload Picture
                            </a>
                            <a href="#update-profile" style={dropdownItemStyle}>
                                <FaUserEdit /> Update Profile
                            </a>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;