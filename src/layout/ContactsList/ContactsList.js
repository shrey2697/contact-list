import { Add } from "@mui/icons-material";
import React from "react";
import { ContactPerson } from "../../components/ContactPerson";
import { Modal } from "../../components/Modal";
import { Stats } from "../../components/Stats";
import { dummyData } from "../../dummy-data";
import "./styles.css";

export const ContactsList = () => {
  const [contacts, setContacts] = React.useState(dummyData);

  const [showModal, setShowModal] = React.useState(false);

  const toggleModal = () => {
    setShowModal((showModal) => !showModal);
  };

  return (
    <div className="contact-root">
      <Modal show={showModal} handleClose={toggleModal}></Modal>
      <div style={{ width: "70%" }}>
        {contacts.map((item, index) => (
          <ContactPerson
            key={item.id}
            data={item}
            isLastItem={index === contacts.length - 1}
            onEdit={toggleModal}
          />
        ))}
      </div>
      <div style={{ width: "30%" }}>
        <button className="add-contact" onClick={toggleModal}>
          <Add /> Add Contact
        </button>

        <Stats data={contacts} />
      </div>
    </div>
  );
};
