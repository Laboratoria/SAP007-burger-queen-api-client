function Navbar({ links }) {
  return (
    <navbar className="menu-all-day">
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <button onClick={link.onClick}>{link.name}</button>
          </li>
        ))}
      </ul>
      <hr></hr>
    </navbar>
  );
}

export default Navbar;
