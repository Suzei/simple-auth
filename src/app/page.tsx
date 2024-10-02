import logo from './assets/logo.svg'
import Image from "next/image";
import { RegisterForm } from './components/RegisterForm';


export default function Home() {
  return (
    <div className="wrapper">
      <Image src={logo} alt="Logo do administrador" width={215} />
      <RegisterForm />
      <sub>© Copyright 2022 a 2024 - Todos os direitos reservados.</sub>
    </div>
  );
}
