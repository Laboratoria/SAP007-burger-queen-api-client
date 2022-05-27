import HeaderPedidos from "../../components/headerPedidos";
import Client from "../../components/client";
import Footer from "../../components/Footer/index";
import Cart from "../../components/cart/index";
import { getProducts } from "../../components/products/products";
import "./styles.modules.css";

function Waitress() {
  getProducts();
  return (
    <>
      <HeaderPedidos />
      <main className="orders">
        <section className="products">
          <h1>produtos</h1>
          {}
        </section>
        <section className="client-cart">
          <div className="client-infos">
            <Client />
          </div>
          <div className="cart">
            <Cart />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Waitress;
