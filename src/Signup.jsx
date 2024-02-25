import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Signup = () => {
	const [email, setemail] = useState('');
	const [password, setPassword] = useState('');
	const navigate=useNavigate()
	const handelsubmit=(e)=>{
		e.preventDefault();
		axios.post('http://localhost:3000/register', {
			email: email,
			password: password
		}).then((res)=>{
			console.log(res.data);
			if(!res.data.uid){
				alert('Invalid email or password provided 6 characters');
			}else{
				navigate('/login');

			}

		})

	}
  return (
    <>
        <div className="login">
<div className="container" id="container">
	<div className="form-container sign-up-container">
		<form id="RegForm">
			<h1>Create Account</h1>
			<div className="social-container">
				<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
				<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
				<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your email for registration</span>
			<input type="text" id="uname" placeholder="Username" />
			<input type="password" id="pwd" placeholder="Password" />
			<Link to={'/login'} type="submit">Sign In</Link>
		</form>
	</div>
	<div className="form-container sign-in-container">
		<form id="LogForm">
			<h1>Sign Up</h1>
			<div className="social-container">
				<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
				<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
				<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your account</span>
			<input type="text" value={email} onChange={(e)=>setemail(e.target.value)} id="unam" placeholder="Username" />
			<input type="password"value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
			{/* <a href="#">Forgot your password?</a> */}
			<button type="submit" onClick={handelsubmit}>Sign Up</button>
		</form>
	</div>
	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button className="ghost" id="signIn">Sign In</button>
			</div>
			<div className="overlay-panel overlay-right">
				<h1>Hello, Friend!</h1>
				<p>Enter your personal details and start journey with us</p>
				<button className="ghost" id="signUp">Sign In</button>
			</div>
		</div>
	</div>
</div>
<script src="signin/signin.js"></script>
    </div>
    </>
  )
}

export default Signup