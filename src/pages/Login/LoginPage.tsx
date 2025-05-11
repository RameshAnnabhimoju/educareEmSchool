import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { loginBanner } from "../../assets";
import "./LoginPage.css";
// import { useNavigate } from "react-router-dom";
import { login } from "../../services/authService";
function LoginPage() {
  // const navigate = useNavigate();
  const LoginHandler = () => {
    login({ data: { username: "Admin", password: "Test123$" } });
    // navigate("login");
  };
  return (
    <div id="login-container">
      <img src={loginBanner} alt="login-banner" id="login-banner" />
      <div id="login-section">
        <div id="login-section-title">Administration Login</div>

        <FloatingLabel
          controlId="floatingInput"
          label="Username"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="username"
            className="login-inputs"
          />
        </FloatingLabel>
        {/* <Form.Text className="login-error-text">sass</Form.Text> */}
        <FloatingLabel
          controlId="floatingPassword"
          label="Password"
          style={{ display: "flex", alignItems: "center" }}
        >
          <Form.Control
            type="password"
            placeholder="Password"
            className="login-inputs"
            id="login-password"
          />
          <i
            // onClick={clickHandler}
            // class={showPass ? "fas fa-eye-slash" : "fas fa-eye"}
            className="fas fa-eye"
            id="login-eye"
          />
          <br />
        </FloatingLabel>
        {/* <Form.Text className="login-error-text">sass</Form.Text> */}
        <Button
          variant="danger"
          id="login-button"
          className="login-inputs"
          onClick={LoginHandler}  >
          Login
        </Button>
      </div>
    </div>
  );
}

export default LoginPage;
