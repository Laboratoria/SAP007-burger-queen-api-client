import { useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Layout } from "../../components/Layout";


export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [name, setName] = useState(""); 
    
    return (
    <Layout>
      <Input
      placeholder= "Digite seu email"
      type= "email"
      value= {email}
      onChange={(e) => setEmail(e.target.value)}
      />
      <Input
      placeholder= "*******"
      type= "password"
      value= {password}
      onChange={(e) => setPassword(e.target.value)}
      />
      <Button
      className="button"
      btnText="clique"
      />
    </Layout>
   ); 

};