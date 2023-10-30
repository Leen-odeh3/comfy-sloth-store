import {Link } from "react-router-dom";

const TopHeader = () => {
  return (
    <div className="top-header">
     <Link to="/Login" className="login">Sign in/Guest</Link>
     <Link to="Register">Create Account</Link>
    </div>
  )
}

export default TopHeader
