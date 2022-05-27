
import { getAllProducts } from "../../services/products";

const token = localStorage.getItem("token");
export  function getProducts() {
    let products = [];
    getAllProducts(token).then((product) => products.push(...product))
    console.log(products);
    let breakfast = [];
    products.map((item) => breakfast.push(item.type === "breakfast"));
    console.log(breakfast);
    
    //     function getBreakfast(products){
        //     products.filter((product) => product.type === "breakfast")
        //     return products
        //     }
        //     console.log(breakfast)
        return breakfast;
    }
