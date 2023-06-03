import React from "react";
import Navigation from "./components/Navigation/Navigation";
import ContactUs from "./components/ContactUs/ContactUs";
import ContactForm from "./components/ContactForm/ContactForm";
import './App.css'
const App = () => {
  return (
    <div>
      <Navigation />
      <div className="container">
        <ContactUs />
        <ContactForm />
      </div>
      
    </div>
  );
};

export default App;
