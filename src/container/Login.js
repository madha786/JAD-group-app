const Login = () => {
  return (
    <div className="login_wall">
      <div className="Div_logo">
        <img src="https://jadgroup.goaspendigital.com/wp-content/uploads/elementor/thumbs/Logo.png" />
      </div>
      <div className="Fixed_button">
        <a href="#">Contact us</a>
      </div>
      <div className="Login_Box">
        <h2>Login to your account</h2>
        <form action="#">
          <label for="email">Email </label>
          <br></br>
          <input
            type="text"
            id="email"
            placeholder="balamia@gmail.com"
            name="email"
          />
          <br></br>
          <label for="Password" className="Label_text">
            Password <a href="#">Forgot？</a>
          </label>

          <input
            type="text"
            id="password"
            placeholder="Enter your password"
            name="password"
          />
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
