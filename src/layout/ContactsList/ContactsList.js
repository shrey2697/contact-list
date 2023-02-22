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
  const [currentContact, setCurrentContact] = React.useState("");
  const [currentIndex, setCurrentIndex] = React.useState("");
  const [mode, setMode] = React.useState(null);

  const toggleModal = (data, index) => {
    if (data) {
      setCurrentContact(data);
      setCurrentIndex(index);
    } else {
      setCurrentContact(null);
      setCurrentIndex(null);
    }
    setShowModal((showModal) => !showModal);
  };

  const deleteItem = (index) => {
    const data = [...contacts];
    console.log(index);
    data.splice(index, 1);
    setContacts(data);
  };

  const addContact = (value) => {
    const data = [...contacts];
    data.push(value);
    setContacts(data);
    toggleModal();
    setMode(null);
  };

  const editContact = (index, value) => {
    const data = [...contacts];
    data[index] = value;
    setContacts(data);
    toggleModal();
    setMode();
  };

  return (
    <div className="contact-root">
      {showModal && (
        <Modal
          show={showModal}
          handleClose={toggleModal}
          addContact={addContact}
          mode={mode}
          currentContact={currentContact}
          currentIndex={currentIndex}
          editContact={editContact}
        />
      )}

      <div style={{ width: "70%" }}>
        {contacts.map((item, index) => (
          <ContactPerson
            key={item.id}
            data={item}
            isLastItem={index === contacts.length - 1}
            onEdit={toggleModal}
            setMode={setMode}
            onDelete={deleteItem}
            index={index}
          />
        ))}
      </div>
      <div style={{ width: "30%" }}>
        <button
          className="add-contact"
          onClick={() => {
            setMode("Add");
            toggleModal();
          }}
        >
          <Add /> Add Contact
        </button>

        <Stats data={contacts} />
      </div>
    </div>
  );
};
