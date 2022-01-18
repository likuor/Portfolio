import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section>
      <div className='main-wrapper'>
        <div className='contents-wrapper'>
          <h1 className='title-h1'>Contact me</h1>
          <h4 className='title-h4'>
            &lt;p&gt; Feel free to send messages to me! &lt;/p&gt;
          </h4>
          <div className='contents-btn'>
            <a href='https://twitter.com/le_pereza' className='btn'>
              Go DM me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
