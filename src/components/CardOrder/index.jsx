function CardOrder ({item}){
  return(
    <div>
         <ul >
         <li>
           <p>Status:{item.status}</p>
          <p>{item.id}</p>
          <p>{item.client_name}</p>
          <p>{item.table}</p>
          <p>{item.createdAt}</p>
          <p>{item.processedAt}</p>
          <p>{item.preparedAt}</p>
          {item.flavor ? <li><p>{item.flavor}</p></li>:null}
            <p>{item.qtd}</p>    
          </li>
      </ul>     
      </div>
  )
}
export default CardOrder;






