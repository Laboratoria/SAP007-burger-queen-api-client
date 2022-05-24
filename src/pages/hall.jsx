import Button from "../components/Button";
import Header from "../components/Header";
import Input from "../components/Input";
import Card from "../components/Card";
import PurchaseOrder from "../components/PurchaseOrder";
import { useNavigate} from "react-router-dom";

function Hall() {
<<<<<<< HEAD
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

=======
    const navigate = useNavigate();
    
    function handleLogout() {
        localStorage.removeItem("token");
        navigate("/login");
    }
    return (
        <div>
            <p>Hall</p>
            <Button children="sair" onClick={handleLogout} />
        </div>
    )
}
>>>>>>> bf030f714f3f3cd65a14c324c61dfc13d2b0511b


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
