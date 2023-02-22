import React from "react";
import { Close } from "@mui/icons-material";
import "./styles.css";

export const Modal = (props) => {
  const {
    show,
    handleClose,
    addContact,
    editContact,
    mode,
    currentContact,
    currentIndex,
  } = props;

  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [accountType, setAccountType] = React.useState("");

  React.useEffect(() => {
    setName(currentContact?.name || "");
    setEmail(currentContact?.email || "");
    setPhoneNumber(currentContact?.phoneNumber?.replace("+91 ", "") || "");
    setGender(currentContact?.gender || "");
    setAccountType(currentContact?.accountType || "");
  }, [currentContact]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value.slice(0, 10));
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleAccountTypeChange = (event) => {
    setAccountType(event.target.value);
  };

  const checkForDisabled =
    name.trim() === "" ||
    email.trim() === "" ||
    phoneNumber.trim() === "" ||
    gender === "" ||
    accountType === "";

  return (
    <div className={showHideClassName}>
      <div className="modal-backdrop" onClick={handleClose}></div>
      <div className="modal-content">
        <button className="close-button" onClick={handleClose}>
          <Close />
        </button>
        <h2>{mode} Contact</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (mode === "Add") {
              addContact({
                id: name + phoneNumber,
                name,
                gender,
                email,
                phoneNumber: "+91 " + phoneNumber,
                accountType,
              });
            } else {
              editContact(currentIndex, {
                id: name + phoneNumber,
                name,
                gender,
                email,
                phoneNumber: "+91 " + phoneNumber,
                accountType,
              });
            }
          }}
        >
          <div className="form-group">
            <label htmlFor="full-name">Full Name:</label>
            <input
              type="text"
              id="full-name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="number"
              id="phoneNumber"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              maxLength={10}
            />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender:</label>
            <select id="gender" value={gender} onChange={handleGenderChange}>
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Memale">Female</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="account-type">Account Type:</label>
            <select
              id="account-type"
              value={accountType}
              onChange={handleAccountTypeChange}
            >
              <option value="">Select</option>
              <option value="Personal">Personal</option>
              <option value="Business">Business</option>
            </select>
          </div>
          <button disabled={checkForDisabled} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
