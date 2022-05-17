import { Input } from "./../../components/Input";
import { Select } from "../../components/Select";
import { Button } from "../../components/Button";
import style from "./register.style.module.css";

export function Register() {

  const opcoesSelect = [
    {
      value: "setor",
      text: "Setor",
      selected: true,
      disabled: true
    },
    {
      value: "cozinha",
      text: "Cozinha",
      selected: false,
      disabled: false
    },
    {
      value: "salao",
      text: "Salão",
      selected: false,
      disabled: false
    }
  ];
  
  return (
    <>
      <main className={style.containerLogin}>
        <div className={style.item}>
        <Input placeholder="NOME"/>
        <Input placeholder="USUÁRIO" />
        <Input placeholder="SENHA" type="password" />
        <Select options={opcoesSelect} />
        <Button>CRIAR CONTA</Button>
        </div>
      </main>
    </>
  );
}
