function Login({ onSelectRole }) {
  return (
    <div className="app-container">
      <div className="card">
        <h2>FixIt</h2>
        <p>Select your role</p>

        <button onClick={() => onSelectRole("USER")}>
          I need a fix
        </button>

        <br /><br />

        <button onClick={() => onSelectRole("WORKER")}>
          I am a professional
        </button>
      </div>
    </div>
  );
}

export default Login;
