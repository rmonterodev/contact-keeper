import React from "react";
import ContactState from "../../context/contact/contactState";
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";

const Home = () => {
  return (
    <div className="grid-2">
      <div>
        <ContactForm />
      </div>

      <div>
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
