function Login() {
  return (
    <div>
      <form>
        <label htmlFor="email">
          Email:
          <input type="email" name="email" id="email" />
        </label>
        <label htmlFor="password">
          Password:
          <input type="password" name="password" id="password" />
        </label>
        <input type="button" name="submit" id="submit" value={"Log in"} />
      </form>
    </div>
  );
}

export default Login;
