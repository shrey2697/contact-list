import { Add } from "@mui/icons-material";
import React from "react";
import { ContactPerson } from "../../components/ContactPerson";
import { Modal } from "../../components/Modal";
import { Stats } from "../../components/Stats";
import { Toast } from "../../components/Toast";
import { dummyData } from "../../dummy-data";
import "./styles.css";

export const ContactsList = () => {
  const [contacts, setContacts] = React.useState(dummyData);
  const [showModal, setShowModal] = React.useState(false);
  const [currentContact, setCurrentContact] = React.useState("");
  const [currentIndex, setCurrentIndex] = React.useState("");
  const [mode, setMode] = React.useState(null);
  const [toast, setToast] = React.useState(null);

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

  const showToast = (text) => {
    setToast(text);
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  const deleteItem = (index) => {
    const data = [...contacts];
    console.log(index);
    data.splice(index, 1);
    setContacts(data);
    showToast("Contact Deleted Successfully");
  };

  const addContact = (value) => {
    const data = [...contacts];
    data.push(value);
    setContacts(data);
    toggleModal();
    setMode(null);
    showToast("Contact Added Successfully");
  };

  const editContact = (index, value) => {
    const data = [...contacts];
    data[index] = value;
    setContacts(data);
    toggleModal();
    setMode();
    showToast("Contact Updated Successfully");
  };

  return (
    <div className="contact-root">
      {toast && <Toast text={toast} />}
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

      <div className="contact-root-left-panel">
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
      <div className="contact-root-right-panel">
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
