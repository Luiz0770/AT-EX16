import "./Global.css"
 
export function Login() {
  return (
    <div className="container">
      <header className="header">
        <h1>Faça o Login</h1>
      </header>

      <form>
        <div className="inputContainer">
          <label>Usuario</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="exemplo@email.com">
          </input>
        </div>

        <div className="inputContainer">
          <label>Senha</label>
          <input
            type="password"
            name="password"
            id="password  "
            placeholder="***********">
          </input>
        </div>

        <a href="">Esqueceu a senha!</a>
        <button className="button">Login</button>

        <div className="footer">
          <p>Não tenho conta?</p>
          <a href="">Crie agora!</a>
        </div>

      </form>
    </div>
  );
}

export default Login