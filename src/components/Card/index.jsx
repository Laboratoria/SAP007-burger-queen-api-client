import { useContext } from 'react'
import { GlobalContext } from '../../global/GlobalContext'
import Button from '../Button'
import styles from "./style.module.css"

// puxar a lista de produtos
function Card ({product}){
  const {states, setter} = useContext(GlobalContext)
  const setPedidos = setter.setPedidos
  const pedidos= states.pedidos
//  console.log(pedidos)

 const addProduto =(product)=>{
    const novaLista =[...pedidos,product]
    setPedidos(novaLista)
    console.log(pedidos)
  }
  return(
    <div>
         <ul className={styles.DivCard}>
         <li>
          <p>{product.name}</p>
          </li>
          <li>
          <p>R${(product.price).toFixed(2)}</p>
          </li>
          {product.flavor ? <li><p>{product.flavor}</p></li>:null}
          <li>
            <p>{product.qtd}</p>
          </li>
      </ul>
      <Button  type="button" onClick={()=>addProduto(product)} children="Adicionar"/>
      
      </div>
  )
}
export default Card