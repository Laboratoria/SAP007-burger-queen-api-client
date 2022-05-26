import Input from "../Inputs";
import "./styles.modules.css";

function Client({ onChange }) {
  return (
    <>
      <Input
        className="client-name"
        type="text"
        placeholder="cliente"
        onChange={onChange}
      />
      <select className="table" onChange={onChange}>
        <option value="">Mesa</option>
        <option value="table-one">Mesa 1</option>
        <option value="table-two">Mesa 2</option>
        <option value="table-three">Mesa 3</option>
        <option value="table-four">Mesa 4</option>
        <option value="table-five">Mesa 5</option>
      </select>
    </>
  );
}

export default Client;
