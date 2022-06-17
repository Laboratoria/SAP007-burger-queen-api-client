import "./styles.css";
import { useState } from "react";


function Navbar({ links }) {
  const [list, setList] = useState(links.map((link, index) => {
    const listobj = link
    if (index === 0) {
      listobj.selected = true
    } else {
      listobj.selected = false
    }
    return listobj
  }))

  function handleClick(link, index) {
    const newList = list.map((li, i) => {
      if (index === i) {
        li.selected = true
      } else {
        li.selected = false
      }
      return li
    })
    setList(newList)
    link.onClick()
  }

  return (
    <navbar className="menu-all-day">
      <ul>
        {list.map((link, index) => (
          <li key={index}>
            <button className={link.selected ? "selected" : "all-day-option"} onClick={() => handleClick(link, index)}>{link.name}</button>
          </li>
        ))}
      </ul>
      <hr className="line-all-day"></hr>
    </navbar>
  );
}

export default Navbar;
