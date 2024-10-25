import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus asperiores rem vitae accusantium enim laudantium, hic autem consequatur aperiam dignissimos eius architecto? Earum fugit explicabo dolorum minus laboriosam rerum id dolores nostrum quisquam laudantium odit enim animi, facere totam natus tenetur consequatur reiciendis corrupti voluptatum!
            </p>            
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-222-91-68</li>
                <li>contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright"> Copyright 2024 &#169; Tomato.com - All Right Reserved</p>
    </div>
  )
}

export default Footer
