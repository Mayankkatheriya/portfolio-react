import React from 'react';
import Title from '../title/Title';
import calender from '../../assets/calendar.png';
import github from '../../assets/social/github.png';
import linkedin from '../../assets/social/linkedin.png';
import instagram from '../../assets/social/instagram.png';
import twitter from '../../assets/social/twitter.png';
import con1 from '../../assets/social/con1.png';
import con2 from '../../assets/social/con2.png';
import con3 from '../../assets/social/con3.png';
import './contact.css';

const Contact = () => {
  return (
    <>
    <Title title="Contact"/>
    <div className="contact">
      <div className='contact_email_area section'>
        <h3>Email:</h3>
        <div className="emailBox">
          <p>mayankkatheriya4@gmail.com</p>
          <button 
            onClick={() => {navigator.clipboard.writeText("mayankkatheriya4@gmail.com")}}
          >Copy</button>
        </div>
      </div>
      <div className="calender section">
        <h3>Schedule Video Call With Me:</h3>
        <img src={calender} alt="calendely" width="150px" />
      </div>
      <div className="socials section">
        <h3>Socials:</h3>
        <div className="social_box">
          <a href="https://github.com/Mayankkatheriya" target="_blank"><img src={github} alt="github" /></a>
          <a href="https://www.linkedin.com/in/mayank-gupta-752328173/" target="_blank"><img src={linkedin} alt="linked in" /></a>
          <a href="https://www.instagram.com/gupta_ji_813/" target="_blank"><img src={instagram} alt="instagram" /></a>
          <a href="/" target="_blank"><img src={twitter} alt="twitter" /></a>
        </div>
      </div>
      <div className="support section">
        <h3>Support My Work:</h3>
        <p>Your support fuels my development journey! With every small donation, you contribute to hostings, domains and other essential costs. All my work is open source and free for everyone to use.</p>
       
        <div className="support_image">
        <a href="/" target="_blank"><img src={con1} alt="" /></a>
        <a href="/" target="_blank"><img src={con2} alt="" /></a>
        <a href="/" target="_blank"><img src={con3} alt="" /></a>
      </div>
      </div>
    </div>
    </>
    
  )
}

export default Contact
