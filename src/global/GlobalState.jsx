import React, { useState } from "react";
import { GlobalContext } from "./GlobalContext";

 function GlobalState(props) {
    const [pedidos, setPedidos] = useState([])


    const states = {pedidos}
    const setter = {setPedidos}

  return (
    <GlobalContext.Provider value={{ states, setter }}>
      {props.children}
    </GlobalContext.Provider>
  );
} 
export default  GlobalState