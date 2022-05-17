import { Input } from "./../../components/Input";
import { Button } from "../../components/Button";
import style from "./login.style.module.css";

export function Login() {

  return (
    <>
      <main className={style.containerLogin}>
        <div className={style.item}>
        <Input placeholder="USUÁRIO" />
        <Input placeholder="SENHA" type="password" />
        <Button>ENTRAR</Button>
        </div>
      </main>
    </>
  );
}
