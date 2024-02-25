import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"



const Login = () => {
	// Remove the unused variable assignment
	const navigate=useNavigate();
	const [email, setemail] = useState('');
	const [password, setPassword] = useState('');
	const handelsubmit=(e)=>{
		e.preventDefault();
		axios.post('http://localhost:3000/login', {
			email: email,
			password: password
		}).then((res)=>{
			console.log(res.data);
			if(!res.data.uid){
				alert('Invalid email or password');
				
			}else{
				
				localStorage.setItem('user', JSON.stringify(res.data.uid));
				navigate('/chat');
			}
		})
	}
	
  return (
    <>
        <div className="login">
<div className="container" id="container">
	
	<div className="form-container sign-in-container">
		<form id="LogForm">
			<h1>Sign in</h1>
			<div className="social-container">
				<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
				<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
				<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your account</span>
			<input type="text" id="unam" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Username" />
			<input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
			<a href="#">Forgot your password?</a>
			<button type="submit" onClick={handelsubmit}>Sign In</button>
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
				<Link to={'/signup'} className="ghost" id="signUp">Sign Up</Link>
			</div>
		</div>
	</div>
</div>

    </div>
    </>
  )
}

export default Login