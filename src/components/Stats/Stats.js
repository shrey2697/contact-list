export const Stats = ({ data }) => {
  const maleCount = data.reduce((acc, record) => {
    return record.gender === "Male" ? acc + 1 : acc;
  }, 0);
  const femaleCount = data.length - maleCount;
  const personalAccountCount = data.reduce((acc, record) => {
    return record.accountType === "Personal" ? acc + 1 : acc;
  }, 0);
  const businessAccountCount = data.length - personalAccountCount;
  return (
    <div className="stats">
      <h3>Statistics</h3>
      <ul>
        <li>
          <h5>
            Number of Males:<strong> {maleCount} </strong>
          </h5>
        </li>
        <li>
          <h5>
            Number of Females:<strong> {femaleCount} </strong>
          </h5>
        </li>
        <li>
          <h5>
            Number of Personal Accounts:
            <strong> {personalAccountCount} </strong>
          </h5>
        </li>
        <li>
          <h5>
            Number of Business Accounts
            <strong> {businessAccountCount} </strong>
          </h5>
        </li>
      </ul>
    </div>
  );
};
