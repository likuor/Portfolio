import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section>
      <div id='contact' className='contact'>
        <div className='container'>
          <div className='contact-contents'>
            <h2>Send me messages</h2>
            <p className='description'>Feel free to contact me!</p>
            <a href='https://twitter.com/le_pereza' className='btn'>
              Go chatting
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
