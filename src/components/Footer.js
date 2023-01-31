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
          <InstagramIcon />
          {/* <TwitterIcon /> */}
          <EmailIcon />
          <LinkedInIcon />
        </div>
        <p> &copy; ksharm19@uoguelph.ca</p>
      </div>
    );
  }
  
  export default Footer;
