import style from "./select.style.module.css";

export function Select(props) {

  const options = props.options || [];

  return (
    <>
      <select name="cars" id="cars">
        {
          options.map((item, index) => {
            return <option value={item.value} selected={item.selected} disabled={item.disabled}>{item.text}</option>
          })
        }
      </select>
    </>
  );
}
