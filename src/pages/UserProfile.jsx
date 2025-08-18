import React, { useState } from 'react';
// Icons ke liye 'react-icons' library se components import kiye gaye hain.
import Header from '../layout/Header';
import {
  FaUserEdit, FaUserCircle, FaUserTie, FaUser, FaPhoneAlt,
  FaMobileAlt, FaFax, FaMapMarkerAlt, FaCity, FaFlag,
  FaFacebookF, FaInstagram, FaTwitter, FaYoutube
} from 'react-icons/fa';
import { IoIosPeople } from "react-icons/io"; // Gender icon
import { Link } from 'react-router-dom';

const UpdateProfile = () => {
  // Form ka data manage karne ke liye state
  const [formData, setFormData] = useState({
    title: '',
    gender: '',
    firstName: '',
    lastName: '',
    primaryPhone: '',
    secondaryPhone: '',
    faxNumber: '',
    address: '',
    city: '',
    country: 'Pakistan',
  });

  // Input change handle karne ke liye function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Form submit handle karne ke liye function
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted Data:', formData);
    // Yahan API call ya doosri logic add kar sakte hain
  };

  // Behtar code ke liye styles ko objects mein define kiya gaya hai.
  // Real application mein inhein alag CSS file mein rakhna behtar hai.
  const styles = {
    container: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: '#f4f7f6',
      padding: '2rem',
    },
    header: {
      color: '#888',
      fontSize: '0.9rem',
      marginBottom: '1rem',
    },
    mainTitle: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '1.8rem',
      color: '#555',
      marginBottom: '1.5rem',
    },
    stepIndicator: {
      display: 'flex',
      gap: '0.5rem',
      marginBottom: '2rem',
    },
    step: {
      padding: '0.5rem 1.5rem',
      borderRadius: '5px',
      color: '#fff',
      backgroundColor: '#bdc3c7', // Inactive color
    },
    activeStep: {
      backgroundColor: '#e67e22', // Active color
    },
    formCard: {
      backgroundColor: '#fff',
      padding: '2rem',
      borderRadius: '8px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
    },
    sectionTitle: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '1.2rem',
      fontWeight: '600',
      color: '#333',
      marginBottom: '2rem',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
    },
    row: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1.5rem',
    },
    formGroup: {
      flex: 1,
      minWidth: '250px',
      display: 'flex',
      flexDirection: 'column',
    },
    formGroupFull: {
      flexBasis: '100%',
    },
    label: {
      marginBottom: '0.5rem',
      color: '#666',
      fontSize: '0.9rem',
    },
    inputContainer: {
      position: 'relative',
    },
    inputIcon: {
      position: 'absolute',
      left: '15px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#aaa',
    },
    input: {
      width: '100%',
      padding: '0.8rem 0.8rem 0.8rem 2.5rem', // Left padding for icon
      border: '1px solid #ddd',
      borderRadius: '5px',
      fontSize: '1rem',
      boxSizing: 'border-box',
    },
    select: {
        width: '100%',
        padding: '0.8rem 0.8rem 0.8rem 2.5rem',
        border: '1px solid #ddd',
        borderRadius: '5px',
        fontSize: '1rem',
        appearance: 'none',
        background: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E") no-repeat right 1rem center / .6em',
        backgroundColor: 'white',
    },
    saveButton: {
      padding: '0.7rem 2rem',
      border: 'none',
      borderRadius: '5px',
      backgroundColor: '#8e44ad',
      color: '#fff',
      fontSize: '1rem',
      cursor: 'pointer',
      alignSelf: 'flex-start',
    },
    footer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '2rem',
      paddingTop: '1rem',
      borderTop: '1px solid #eee',
      color: '#888',
      fontSize: '0.9rem',
    },
    footerRight: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
    },
    socialIcons: {
        display: 'flex',
        gap: '0.8rem',
    },
    nextButton: {
      padding: '0.7rem 2.5rem',
      border: 'none',
      borderRadius: '5px',
      backgroundColor: '#8e44ad',
      color: '#fff',
      fontSize: '1rem',
      cursor: 'pointer',
    },
  };

  return (
    <>
    <Header/>
    <div style={styles.container}>
      <div style={styles.header}>Profile / Profile Wizard</div>
      
      <h1 style={styles.mainTitle}>
        <FaUserEdit style={{ marginRight: '1rem' }} /> Update Profile
      </h1>

      <div style={styles.stepIndicator}>
        <div style={{ ...styles.step, ...styles.activeStep }}>Step 1</div>
        <div style={styles.step}>Step 2</div>
        <div style={styles.step}>Step 3</div>
      </div>

      <div style={styles.formCard}>
        <h2 style={styles.sectionTitle}>
          <FaUserCircle style={{ marginRight: '1rem' }} /> PERSONAL DETAILS
        </h2>
        
        <form style={styles.form} onSubmit={handleSubmit}>
          {/* Row 1: Title and Gender */}
          <div style={styles.row}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Title</label>
              <div style={styles.inputContainer}>
                <FaUserTie style={styles.inputIcon} />
                <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Dr. / Mr. / Mrs." style={styles.input} />
              </div>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Gender</label>
              <div style={styles.inputContainer}>
                 <IoIosPeople style={styles.inputIcon} />
                 <select name="gender" value={formData.gender} onChange={handleChange} style={styles.select}>
                   <option value="">---Select---</option>
                   <option value="male">Male</option>
                   <option value="female">Female</option>
                   <option value="other">Other</option>
                 </select>
              </div>
            </div>
          </div>

          {/* Row 2: First Name and Last Name */}
          <div style={styles.row}>
            <div style={styles.formGroup}>
              <label style={styles.label}>First Name</label>
              <div style={styles.inputContainer}>
                <FaUser style={styles.inputIcon} />
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Enter your first name" style={styles.input} />
              </div>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Last Name</label>
              <div style={styles.inputContainer}>
                <FaUser style={styles.inputIcon} />
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Enter your last name" style={styles.input} />
              </div>
            </div>
          </div>

          {/* Row 3: Phone Numbers */}
          <div style={styles.row}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Primary Phone Number</label>
              <div style={styles.inputContainer}>
                <FaPhoneAlt style={styles.inputIcon} />
                <input type="tel" name="primaryPhone" value={formData.primaryPhone} onChange={handleChange} placeholder="Enter your primary phone number" style={styles.input} />
              </div>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Secondary Phone Number</label>
              <div style={styles.inputContainer}>
                <FaMobileAlt style={styles.inputIcon} />
                <input type="tel" name="secondaryPhone" value={formData.secondaryPhone} onChange={handleChange} placeholder="Enter your secondary phone number" style={styles.input} />
              </div>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Fax Number</label>
              <div style={styles.inputContainer}>
                <FaFax style={styles.inputIcon} />
                <input type="text" name="faxNumber" value={formData.faxNumber} onChange={handleChange} placeholder="Fax Number" style={styles.input} />
              </div>
            </div>
          </div>

          {/* Row 4: Address */}
          <div style={{ ...styles.row }}>
            <div style={{ ...styles.formGroup, ...styles.formGroupFull }}>
              <label style={styles.label}>Address</label>
              <div style={styles.inputContainer}>
                <FaMapMarkerAlt style={styles.inputIcon} />
                <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Enter your complete address" style={styles.input} />
              </div>
            </div>
          </div>

          {/* Row 5: City and Country */}
          <div style={styles.row}>
            <div style={styles.formGroup}>
              <label style={styles.label}>City</label>
              <div style={styles.inputContainer}>
                <FaCity style={styles.inputIcon} />
                <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="Enter your city name" style={styles.input} />
              </div>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Country</label>
              <div style={styles.inputContainer}>
                <FaFlag style={styles.inputIcon} />
                <select name="country" value={formData.country} onChange={handleChange} style={styles.select}>
                  <option value="Pakistan">Pakistan</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                </select>
              </div>
            </div>
          </div>

          <button type="button" style={styles.saveButton}>Save</button>
        </form>
      </div>

      <footer style={styles.footer}>
        <div>Powered by HISOFT © 2020 - 2025</div>
        <div style={styles.footerRight}>
          <span>Follow us</span>
          <div style={styles.socialIcons}>
             <FaFacebookF />
             <FaInstagram />
             <FaTwitter />
             <FaYoutube />
          </div>
        <Link to={"/user-profile2"}>  <button style={styles.nextButton}>Next</button> </Link>
        </div>
      </footer>
    </div>
    </>
  );
};

export default UpdateProfile;