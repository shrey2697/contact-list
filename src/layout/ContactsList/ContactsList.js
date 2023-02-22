import { ContactPerson } from "../../components/ContactPerson";
import { Stats } from "../../components/Stats";
import { dummyData } from "../../dummy-data";
import "./styles.css";

export const ContactsList = () => {
  return (
    <div className="contact-root">
      <div style={{ width: "80%" }}>
        {dummyData.map((item, index) => (
          <ContactPerson
            key={item.id}
            data={item}
            isLastItem={index === dummyData.length - 1}
          />
        ))}
      </div>
      <div style={{ width: "20%" }}>
        <Stats data={dummyData} />
      </div>
    </div>
  );
};
