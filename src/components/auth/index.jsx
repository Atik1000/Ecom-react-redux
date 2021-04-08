import React, { useState } from "react";
import LoginForm from "./LoginForm";

const Authenticat = () => {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };
  const [user, setUser] = useState({ name: "", email: "",password:"" });
  const [error, setError] = useState("");
  const Login = (details) => {
    if(details.email===adminUser.email && details.password===adminUser.password){
      console.log('logged in');
      setUser({
        name:details.name,
        email:details.email,
      })
    }else{
      console.log("Not match");
      setError("details do not match");
    }
    console.log(details);
  };
  const Logout = () => {
    console.log("logout");
    setUser({name:"",email:""});
  };
  return <>
  {(user.email !=="")?(
     <div className="welcome">
          <h2>Welcome, <span>{user.name}</span> </h2>
      <button onClick={Logout}>Logout</button>
     </div>
  ):(
      <LoginForm Login={Login} error={error}/>
  )
  }
  </>;
};

export default Authenticat;
