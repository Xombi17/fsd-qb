// LoginMessage component - conditional rendering based on login status
function LoginMessage({ isLoggedIn }) {
  if (isLoggedIn) {
    return <p className="message welcome">Welcome! You are logged in.</p>
  }
  return <p className="message please">Please login to continue.</p>
}

export default LoginMessage
