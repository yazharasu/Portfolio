import React from 'react';
import './contact.css'


function Contact() {

    let boxClass = ["message-out"];

    const messageHandler = () => {
        boxClass.push('message-in');      
    }

  return (
        <div className='contact-cotainer' id='contact-cotainer'>
             <div className='contact-title'>
                <h1>Contact Me 📞</h1>
                <p>Lets Keep In Touch 🤝 </p>
            </div>

            <div className='contact-details'>
                <div className='contact-left-content'>
                    <div className='contact-get-touch'>
                        <h1>Get In Touch 📧</h1>
                    </div>
                    <div className='social-icons'> 
                        <a href="https://www.linkedin.com/in/yazharasu-a">
                            <i className='fa fa-linkedin-square' />
                        </a>
                        <a href="https://github.com/yazharasu">
                            <i className='fa fa-github' />
                        </a>
                        <a href="https://www.facebook.com/yazh.udt">
                            <i className='fa fa-facebook-square' />
                        </a>
                        <a href="https://www.instagram.com">
                            <i className='fa fa-instagram' />
                        </a>
                    </div>
                    <div className='send-mail'>
                        <div>Mobile: +91 9597904195</div>
                        <div>Email: yazh.bis@gmail.com</div>
                    </div>
                    <div className='email-image'>

                    </div>
                </div>
    
                <div className='contact-right-content'>
                    <div className='contact-form'>
                        <form>
                            <p className={boxClass.join(' ')}> Thanks for contacting me... </p>
                            <input className='input name' type='text' placeholder='Name'/><br />
                            <input className='input email' type='email' placeholder='Email'/><br />
                            <textarea className='input message' placeholder='Message...' name="text" wrap="soft"></textarea><br />
                            <input className='button-submit' onClick={messageHandler} type='button' value='Send Message' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
