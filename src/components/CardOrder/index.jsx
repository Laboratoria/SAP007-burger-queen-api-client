function CardOrder ({product,key}){
  return(
    <div key={key} onClick={onclick}>
         <ul >
         <li>
          <p >{product.id}</p>
          <p>{product.name}</p>
          <p>{product.complemet}</p>
          {product.flavor ? <li><p>{product.flavor}</p></li>:null}
            <p>{product.qtd}</p>
          </li>
      </ul>     
      </div>
  )
}
export default CardOrder;