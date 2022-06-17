import "./styles.css";

const Radio = ({ name, label, value, onChange }) => {
  return (
    <label>
      <input
        name={name}
        type="radio"
        value={value}
        onChange={onChange}
        required
      />
      {label}
    </label>
  );
};

export default Radio;