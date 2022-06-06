function CardOrder ({product,key}){
  return(
    <div key={key} onClick={onclick}>
         <ul >
         <li>
          <p >{product.id}</p>
          </li>
         <li>
          <p>{product.name}</p>
          </li>
          <li>
          <p>{product.complemet}</p>
          </li>
          {product.flavor ? <li><p>{product.flavor}</p></li>:null}
          <li>
            <p>{product.qtd}</p>
          </li>
      </ul>     
      </div>
  )
}
export default CardOrder;