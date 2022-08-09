import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import qs from 'qs'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async () => {
    const URL = 'http://localhost:8080/users/login';
    try {
      const response = await axios.post(URL, qs.stringify({email: email, password: password}))
      console.log(response.data.details);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <h1>로그인</h1>
      <input
        value={email}
        onChange={({ target: { value } }) => setEmail(value)}
        type="text"
        placeholder="email"
      />
      <br/>
      <input
        value={password}
        onChange={({ target: { value } }) => setPassword(value)}
        type="password"
        placeholder="password"
      />
      <br/>
      <button onClick={handleClick}>로그인</button>
      <Link to="/auth/signUp">
        <button>회원가입</button>
      </Link>
    </div>
  );
}

export default Login;
