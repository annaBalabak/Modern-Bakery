import React from "react";
import styles from "./Footer.module.css";
import youtube from '../../images/youtube.svg'
import instagramIcon from '../../images/instagram.svg'
import facebookIcon from "../../images/facebook.svg";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <ul className={styles.information}>
        <li>Call us: 717-469-7400 1976</li>
        <li>Laudermilch Rd., Palmyra, PA 17078</li>
        <li>Located in the Farmstead Farmers Market </li>
        <li>Open 8 a.m. to 6 p.m.</li>
      </ul>
      <p className={styles.quotation}>Phenomenally <br /> Healthy! </p>
   <div className={styles.socialmedia}>
    <img src={youtube} alt="youtube icon" />
    <img src={instagramIcon} alt="instagram icon" />
    <img src={facebookIcon} alt="facebook icon" />
   </div>
    </div>
  );
};

export default Footer;
