import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./ContactForm.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/contact", {
        name,
        email,
        message,
      });
      Swal.fire({
        title: "Message Sent!",
        text: "Thank you for your message! We will get back to you soon.",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#014802",
      });
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again later.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="contact  container">
      <div className="row">
        <div className="col__2">
          <div className="contact__box">
            <div className="contact__meta">
              <h2 className="hire__text">Support</h2>
              <h1 className="hire__text">Contact</h1>
              <p className="hire__text">
                If you have any questions, problems, or feedback get in touch
                here:
              </p>
            </div>

            <div className="input__box">
              <form onSubmit={handleSubmit}>
                <div className="contact_sub_text">Name *</div>
                <input
                  type="text"
                  className="contact"
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <div className="contact_sub_text">Email *</div>
                <input
                  type="email"
                  className="contact"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <div className="contact_sub_text">Message *</div>
                <textarea
                  placeholder="Enter Your Message"
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
                <div className="send__button">
                  <button className="send__pointer btn" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
