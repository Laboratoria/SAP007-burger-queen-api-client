function SelectExtra({onChange,value, type}){
  return(
  <select  type={type} className="options-extra" id="extras" onChange={onChange}>
  <option className="options-extra"value={value}>Adicional</option>
  <option className="options-extra" value={value}>Ovo</option>
  <option className="options-extra" value={value}>Queijo</option>
</select>
)
}
export default SelectExtra;