import React from "react";
import { Close } from "@mui/icons-material";
import "./styles.css";

export const Modal = (props) => {
  const { show, handleClose, children } = props;
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [accountType, setAccountType] = React.useState("");

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value.slice(0, 10));
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleAccountTypeChange = (event) => {
    setAccountType(event.target.value);
  };

  const checkForDisabled =
    fullName.trim() === "" ||
    email.trim() === "" ||
    phone.trim() === "" ||
    gender === "" ||
    accountType === "";

  return (
    <div className={showHideClassName}>
      <div className="modal-backdrop" onClick={handleClose}></div>
      <div className="modal-content">
        <button className="close-button" onClick={handleClose}>
          <Close />
        </button>
        <h2>Add Contact</h2>
        <form>
          <div className="form-group">
            <label htmlFor="full-name">Full Name:</label>
            <input
              type="text"
              id="full-name"
              value={fullName}
              onChange={handleFullNameChange}
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
            <label htmlFor="phone">Phone:</label>
            <input
              type="number"
              id="phone"
              value={phone}
              onChange={handlePhoneChange}
              maxLength={10}
            />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender:</label>
            <select id="gender" value={gender} onChange={handleGenderChange}>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
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
              <option value="personal">Personal</option>
              <option value="business">Business</option>
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
