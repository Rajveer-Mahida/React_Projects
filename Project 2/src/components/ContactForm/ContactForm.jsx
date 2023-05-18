import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("Default");
  const [email, setEmail] = useState("Default");
  const [message, setMessage] = useState("Default");

  const onSubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setMessage(event.target[2].value);
  };



  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
      <div>
      {"Name : " + name + " ||  Email : " + email + " || Message : " + message}
      </div>
        <div className={styles.top_btn}>
          <Button className={styles.primary_btn} text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} />
          <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
        </div>
        <div className="outline_btn">
          <Button isOutline={true} text="VIA EMAIL FORM" icon={<HiMail fontSize="24px" />} />
        </div>
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="Submit" >Submit</Button>
          </div>
        </form>
       
      </div>
      <div>
        <img src="/images/Service.svg" alt="contact image" />
      </div>
    </section>
  );
};

export default ContactForm;
