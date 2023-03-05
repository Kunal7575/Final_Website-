import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
// import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
    return (
      <div className="footer">
        <div className="socialMedia">
       
          {/* <TwitterIcon /> */}
          
          {/* <LinkedInIcon /> */}
          <div className="header_socials">
            <a href="https://www.instagram.com/" target="_blank"> <InstagramIcon /></a>
            <a href="https://outlook.live.com/owa/" target="_blank"><EmailIcon /></a>
            <a href="https://www.linkedin.com/in/kunal -sharma-766b88211" target="_blank"><LinkedInIcon /></a>
          </div>
        </div>
        <p> &copy; ksharm19@uoguelph.ca</p>
      </div>
    );
  }
  
  export default Footer;
