import "./styles.modules.css";

function Navbar({ links }) {
  return (
    <navbar className="menu-all-day">
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <button className="all-day-option" onClick={link.onClick}>{link.name}</button>
          </li>
        ))}
      </ul>
      <hr className="line-all-day"></hr>
    </navbar>
  );
}

export default Navbar;
