import { Input } from "./../../components/Input";
import style from "./register.style.module.css";

export function Register() {
  return (
    <>
      <main className={style.containerLogin}>
        <div className={style.item}>
        <Input />
        <Input />
        </div>
      </main>
    </>
  );
}
