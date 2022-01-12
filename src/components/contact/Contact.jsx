import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import github from "../../img/git.png";
import linked from "../../img/linked.png";
import { useContext, useRef, useState } from "react";
import emailjs from 'emailjs-com';
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_7c560yy', 'template_aj2k247', formRef.current, 'user_ccbcDSpYCvCEzypKJ9TTt')
    .then((result) => {
        console.log(result.text);
        setDone(true)
    }, (error) => {
        console.log(error.text);
    });
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +20 010 199 50 706
            </div>
            <div className="c-info-item">
            <a href='https://mail.google.com/mail/u/?authuser=user@gmail.com' target="_blank"
                           rel="noreferrer">
              <img className="c-icon" src={Email} alt="" /></a>
              Elarabym857@gmail.com
            </div>
           
            <div className="c-info-item">
            <a href='https://github.com/mohmaedelaraby' target="_blank"
                            rel="noreferrer">
              <img className="c-icon" src={github} alt="" /></a>
              mohamed elaraby
            </div>

            <div className="c-info-item">
            <a href='https://www.linkedin.com/in/mohamed-elaraby-060a96158/' target="_blank"
                            rel="noreferrer">
              <img className="c-icon" src={linked} alt="" /></a>
              Mohamed El-Araby
            </div>
            <div className="c-info-item">
            
              <img className="c-icon" src={Address} alt="" />
              Cairo ,Egypt
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. I'm available for
            hiring if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
            <button type="submit" value="Send">Submit</button>
            {done && " Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
