import "./style.modules.css";
const Checkbox = ({ name, label, value, onChange }) => {
  return (
    <label>
      <input name={name} type="radio" onChange={onChange} />
      {label}
    </label>
  );
};

export default Checkbox;