import  Button  from "../components/Button";
import { useNavigate } from "react-router-dom";

function Kitchen() {
  const navigate = useNavigate();
  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }
  return (
    <div>
      <p>Cozinha</p>
      <Button children="sair" onClick={handleLogout} />
    </div>
  );
}

export default Kitchen;
