import { useState } from "react";

function Login() {

  const [data, setData] = useState({
    name :'Teste',
    email : 'Teste@gmail.com',
    password : '123456789'
  });

  return (
    <div>
      <div className="container">
        <div className="d-flex flex-column">
          <h1 className="ms-auto me-auto">Login</h1>

          <form
            className="d-flex flex-column container bg-white shadow-sm p-2 rounded-2"
            action="onSubmit"
          >
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Digite Seu Nome Completo..."
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Digite Seu Email..."
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Digite Sua Senha..."
            />

            <input
              onClick={() => {
                setData(
                  data.name = 'dsadadad',
                  data.email = 'sla@gmal.com',
                  data.password = '12345678798978978978978'
                )
              }}
              type="submit"
              value="Enviar Formulario"
            />
          </form>
        </div>
        <h1>Nome: {data.name}</h1>
        <h1>Email: {data.email}</h1>
        <h1>Password: {data.password}</h1>
      </div>
    </div>
  );
}

export default Login;
