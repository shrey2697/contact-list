import {
  BusinessCenterOutlined,
  Delete,
  Edit,
  EmailOutlined,
  Person2Outlined,
  PhoneOutlined,
} from "@mui/icons-material";
import FaceIcon from "@mui/icons-material/Face";
import "./styles.css";

export const ContactPerson = ({ data, isLastItem, onEdit }) => {
  const { name, gender, phoneNumber, accountType, email } = data;
  return (
    <div>
      <div className="contact-person">
        <div className="contact-person-left-panel">
          <div className="contact-person-icon">
            <FaceIcon
              style={{
                fontSize: 70,
                color: gender === "Male" ? "#278AE7" : "#DE5C9D",
              }}
              className="icon"
            />
          </div>
          <div className="contact-person-details">
            <h3> {name}</h3>
            <span>
              <PhoneOutlined className="contact-icon" />
              <h5> {phoneNumber}</h5>
            </span>
            <span>
              <EmailOutlined className="contact-icon" />
              <h5>{email}</h5>
            </span>
            <span>
              {accountType === "Personal" ? (
                <Person2Outlined className="contact-icon" />
              ) : (
                <BusinessCenterOutlined className="contact-icon" />
              )}
              <h5>{accountType} Account</h5>
            </span>
          </div>
        </div>
        <div className="contact-person-right-panel">
          <button
            className="contact-button contact-button-edit"
            onClick={onEdit}
          >
            <Edit />
          </button>
          <button className="contact-button contact-button-delete">
            <Delete />
          </button>
        </div>
      </div>
      {!isLastItem && <div className="divider"></div>}
    </div>
  );
};
