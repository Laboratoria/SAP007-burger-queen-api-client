import Input from "../Inputs";
import "./styles.modules.css";

function Client({ setClient, setTable, client, table }) {
  return (
    <>
      <Input
        className="client-name"
        type="text"
        placeholder="cliente"
        value={client}
        onChange={(e) => setClient(e.target.value)}
      />
      <select
        className="table"
        onChange={(e) => setTable(Number(e.target.value))}
        value={table}
      >
        <option id="0" value="">
          Mesa
        </option>
        <option id="1" value="1">
          Mesa 1
        </option>
        <option id="2" value="2">
          Mesa 2
        </option>
        <option id="3" value="3">
          Mesa 3
        </option>
        <option id="4" value="4">
          Mesa 4
        </option>
        <option id="5" value="5">
          Mesa 5
        </option>
      </select>
    </>
  );
}

export default Client;
