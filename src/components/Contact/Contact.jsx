import React from 'react'
import "./Contact.css";
import msg_icon from "../../images/msg-icon.png"
import mail_icon from "../../images/mail-icon.png"
import phone_icon from "../../images/phone-icon.png"
import location_icon from "../../images/location-icon.png";
import white_arrow from "../../images/white-arrow.png"
const Contact = () => {
  const [result, setResult] = React.useState("");

  const formSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3220a3f8-7449-434a-a750-12928eba014b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      event.target.reset()
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact">
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>
                Fell free to reach out through contact form or find our contact information below. Your feedback,questions, and suggestions are important to us as we strive to provide exceptional service to our university community
            </p>
            <ul>
                <li> <img src={mail_icon} alt="" /> Contact@educity.dev</li>
                <li> <img src={phone_icon} alt="" /> +919876543210</li>
                <li> <img src={location_icon} alt="" /> Ameerpet,Telengana</li>
            </ul>
        </div>
        <div className="contact-col">
           <form onSubmit={formSubmit}>
                <label>Your Name</label>
                <input type="text" name="name" placeholder="Enter your Name" required />
                <label>Phone Number</label>
                <input type="tel" name="phone" placeholder='Enter Your mobile number' required />
                <label>Write Your Message Here</label>
                <textarea name="msg"rows="6" placeholder='Enter Your message' required></textarea>
                <button type="submit" className="btn dark-btn">Submit now <img src={white_arrow} alt=""  /> </button>
           </form>
           <span>{result}</span>
        </div>
    </div>
  )
}
// 3220a3f8-7449-434a-a750-12928eba014b

export default Contact