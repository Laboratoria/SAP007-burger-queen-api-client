import { useState } from "react";
import { Layout } from "../../components/Layout";


export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    
    return (
    <Layout>
      <input
        type="text" placeholder="Digite seu email"
      />
                
    </Layout>
   ); 

};