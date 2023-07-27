// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  return (
    <footer >
      <div className='footer-container'>

        <div className='left-footer-container'>
          <div className='left-footer-content'>
            <div className="link0">
              Find a store
            </div>
            <div className="link1">
              become a partner
            </div>
            <div className="link1">
              sign up for email
            </div>
            <div className="link1">
              send us feedback
            </div>
            <div className="link1">
              student discount
            </div>
          </div>
          <div className='left-footer-content'>
            <div className="link0">
              get help
            </div>
            <div className="link1">
              Order Status
            </div>
            <div className="link1">
              Delivery
            </div>
            <div className="link1">
              Returns
            </div>
            <div className="link1">
              Payment Options
            </div>
            <div className='link1'>
              Contact Us
            </div>
          </div>
          <div className='left-footer-content'>
            <div className="link0">
              About nike
            </div>
            <div className="link1">
              News
            </div>
            <div className="link1">
              Careers
            </div>
            <div className="link1">
              Investors
            </div>
            <div className="link1">
              Sustainability
            </div>
          </div>
        </div>

        <div className='right-footer-container'>
          <div className='footer-icon-container'>
            <div className='footer-icons'>
              <FaFacebookF size={20} />
            </div>
            <div className='footer-icons'>
              <FaTwitter size={20} />
            </div>
            <div className='footer-icons'>
              <FaYoutube size={20} />
            </div>
            <div className='footer-icons'>
              <FaInstagram size={20} />
            </div>
          </div>
        </div>
      </div>

      <div className='allRight'>
        <div className="allRightReserved">
         © 2023 Nike, Inc. All Rights Reserved
        </div>
      {/* RIGHT START */}
      <div className="right-footer-content">
        <div className="guides">
          Guides
        </div>
        <div className="guides">
          Terms of Sale
        </div>
        <div className="guides">
          Terms of Use
        </div>
        <div className="guides">
          Privacy Policy
        </div>
      </div>
      </div>

    </footer>
  )
}

export default Footer