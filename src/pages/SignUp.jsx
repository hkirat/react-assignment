function SignUp() {
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
        <label htmlFor="confirm-password">
          Confirm Password:
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
          />
        </label>
        <input type="button" name="submit" id="submit" value={"Sign up"} />
      </form>
    </div>
  );
}

export default SignUp;
