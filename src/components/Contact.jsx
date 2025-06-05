import { useState } from 'react'
import '../assets/css/Contact.css'
import msg_icon from '../assets/images/msg-icon.png'
import mail_icon from '../assets/images/mail-icon.png'
import phone_icon from '../assets/images/phone-icon.png'
import location_icon from '../assets/images/location-icon.png'
import { ArrowLongRightIcon } from '@heroicons/react/20/solid'

const Contact = () => {
    const [result, setResult] = useState("");
    const emailKey = import.meta.env.VITE_EMAIL_PRIVATE_KEY;

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", emailKey);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
        <div className='contact'>
            <div className='contact-col'>
                <h3>Send us a message <img src={msg_icon} alt='msg-icon' /></h3>
                <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions,
                    and suggestions are important to us as we strive to provide exceptional service to our university community.
                </p>
                <ul>
                    <li><img src={mail_icon} alt='mail_icon' />contact@stmarys.org</li>
                    <li><img src={phone_icon} alt='phone_icon' />+91 9090909000</li>
                    <li><img src={location_icon} alt='location_icon' /> 01, chennai-Bangalore bypass highway,<br /> Sriperumbudur  </li>
                </ul>
            </div>
            <div className='contact-col'>
                <form onSubmit={onSubmit}>
                    <label htmlFor="contactName">Your Name</label>
                    <input type="text" id='contactName' name='name' placeholder='Enter your Name' required />
                    <label htmlFor="contactNumber">Phone Number</label>
                    <input type="tel" id='contactNumber' name='phone' placeholder='Enter your Mobile Number' required />
                    <label htmlFor="contactMessage">Write your Message here</label>
                    <textarea id='contactMessage' name='message' rows='6' placeholder='Enter your message' required></textarea>
                    <button className='btn btn-dark' type='submit'>Submit Now<ArrowLongRightIcon className='size-3' /></button>
                </form>
                <span className=''>
                    {result}
                    {/* 5ff5b463-3c8c-4bda-bd88-7e9f7ae5da29 */}
                </span>
            </div>
        </div>
    )
}

export default Contact