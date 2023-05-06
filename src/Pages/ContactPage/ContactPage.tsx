import React from "react";

import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import MessageInput from "../../Components/MessageInput/MessageInput";

import "./ContactPage.scss";

function ContactPage() {
  return (
    <>
      <NavBar />
      <div className="contactSection">
        <div className="contactContainer">
          <h1 className="contactTitle">Contactez nous !</h1>
          <div className="contactFormContainer">
            <div className="contactFormContainerLeft">
              <Input label="Nom" placeholder="Nom" type="text" />
              <Input label="Prénom" placeholder="Prénom" type="text" />
              <Input label="Email" placeholder="Email" type="email" />
            </div>
            <div className="contactFormContainerRight">
              <MessageInput
                label="Message"
                placeholder="Message"
                rows={6}
                cols={40}
              />
              <Button label="Envoyer" url="/" targetBlank={false} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactPage;
