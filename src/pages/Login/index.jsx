import { Input } from "./../../components/Input";
import style from "./login.style.module.css";

export function Login() {
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
