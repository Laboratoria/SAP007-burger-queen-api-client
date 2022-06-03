import Input from "../Inputs";
import "./styles.modules.css";

function Client( {setClient, setTable} ) {
  return (
    <>
      <Input
        className="client-name"
        type="text"
        placeholder="cliente"
        onChange={(e)=> setClient(e.target.value)}
      />
      <select className="table" onChange={(e)=> setTable(Number(e.target.value))}>
        <option value="">Mesa</option>
        <option value="1">Mesa 1</option>
        <option value="2">Mesa 2</option>
        <option value="3">Mesa 3</option>
        <option value="4">Mesa 4</option>
        <option value="5">Mesa 5</option>
      </select>
    </>
  );
}

export default Client;
