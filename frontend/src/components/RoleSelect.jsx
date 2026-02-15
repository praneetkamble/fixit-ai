import { useNavigate } from "react-router-dom";

export default function RoleSelect() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "40px" }}>
      <h1>FixIt</h1>
      <p>Select your role</p>

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => navigate("/user")}
          style={{
            padding: "12px 20px",
            marginRight: "10px",
            cursor: "pointer",
          }}
        >
          I need a fix
        </button>

        <button
          onClick={() => navigate("/worker")}
          style={{
            padding: "12px 20px",
            cursor: "pointer",
          }}
        >
          I am a professional
        </button>
      </div>
    </div>
  );
}
