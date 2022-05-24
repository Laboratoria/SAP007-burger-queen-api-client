import Button from "../components/Button";
import Header from "../components/Header";
import Input from "../components/Input";
import Card from "../components/Card";
import PurchaseOrder from "../components/PurchaseOrder";
import { useNavigate} from "react-router-dom";

function Hall() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }



  return (
    <div>
      <Header text="PEDIDOS" />
      <Button text="sair" onClick={handleLogout} />
      <Input placeholder="MENU PRINCIPAL" />
      <Input placeholder="CAFÉ DA MANHÃ" />
      <Card />
      <PurchaseOrder />
      <Input  />
        
      <Input placeholder="MESA" />
    </div>
  );
}

export default Hall;
