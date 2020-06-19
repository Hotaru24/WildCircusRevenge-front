import React from 'react';
import {Link} from 'react-router-dom';
import '../CSS/Footer.css';


const Footer = () => {


   let now = new Date();
    let year = now.getFullYear();
    
  
    return (
      <div id="footer">          
        <h1> Wild Circus </h1> 
        <div id="footerBody">
          <p id="juridic">© {year} Wild Circus - Tous droits réservés - <Link to="/legalNotices">Mentions Légales</Link></p>
          <div id="icons">
            <a target="_blank"  href="https://www.facebook.com/Wild-Circus-360522814570063/">
              <img id ="facebook" src={`${process.env.PUBLIC_URL}/Pictures/facebook.png`} alt='facebook'/>
            </a>
            <a target="_blank" href="https://www.instagram.com/wild_circus/">
              <img id ="instagram" src={`${process.env.PUBLIC_URL}/Pictures/instagram.png`} alt='instagram'/>
            </a> 
          </div>
          
        </div>  
      </div>
    );
  }
  
  export default Footer;