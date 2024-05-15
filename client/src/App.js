import "./App.css";
import LoginButton from "./components/loginButton";
import LogoutButton from "./components/logoutButton";
import UserProfile from "./components/userProfile";
import Header from "./components/header";
import Footer from "./components/footer";
import { useState } from "react";
import axios from 'axios';

function App() {
  const [data, setData] = useState("");
  const [postData, setPostData] = useState([]);

  const handleChange = (e) => {
    setData(e.target.value);
    //Axios call to send data to backend
  };

  axios.get('http://localhost:3002/users')
  .then((res) => {
    let body = res.body
    console.log(typeof body)
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    setData("");

    let x = (data)
    console.log(x)
    axios.post('http://localhost:3002/userData/upload', [x])
    // take the current elements in postData copy with ... and append with data
    setPostData((prevData) => [...prevData, data]);
  };

  return (
    <div className="App">
      <LoginButton />
      <LogoutButton />
      <p>User Information!</p>
      <UserProfile />
    </div>
  );
}

export default App;
