import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();
  const [email,setEmail] = useState('');

  let rand = Math.floor(100000000 + Math.random() * 900000000);
  let msg = `Your new password is:${rand}`;
  console.log(msg)
  let handleEmail = (e) =>{
      setEmail(e.target.value)
  }
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_ee2uuvi', form.current, 'user_Azf3CRUgJhHcXQxjVttMK',{
        from_name: "Admin",
        user_email:"azeemsult4n@gmail.com",
        to_name: "User",
        message: msg,
        reply_to: email,
    })
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>To_name</label>
      <input type="text" name="to_name"/>
      <label>Email</label>
      <input type="email" name="reply_to" value={email} onChange={handleEmail} />
      <input style={{display:'none'}} type="text" name="message" id="message" value={msg}/>
      <input type="submit" value="Send" />
    </form>
  );
};

