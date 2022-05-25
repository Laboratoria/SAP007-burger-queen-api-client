function filterProducts (data,type){
  return data.filter((item)=> item.type ===type);
}
export default filterProducts